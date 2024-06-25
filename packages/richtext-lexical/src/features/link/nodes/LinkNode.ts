import type {
  BaseSelection,
  DOMConversionMap,
  DOMConversionOutput,
  EditorConfig,
  ElementNode as ElementNodeType,
  LexicalCommand,
  LexicalNode,
  NodeKey,
  RangeSelection,
} from 'lexical'

import { addClassNamesToElement, isHTMLAnchorElement } from '@lexical/utils'
import ObjectID from 'bson-objectid'
import {
  $applyNodeReplacement,
  $createTextNode,
  $getSelection,
  $isElementNode,
  $isRangeSelection,
  ElementNode,
  createCommand,
} from 'lexical'

import type { LinkPayload } from '../plugins/floatingLinkEditor/types.js'
import type { LinkFields, SerializedLinkNode } from './types.js'

const SUPPORTED_URL_PROTOCOLS = new Set(['http:', 'https:', 'mailto:', 'sms:', 'tel:'])

/** @noInheritDoc */
export class LinkNode extends ElementNode {
  __fields: LinkFields
  __id: string

  constructor({
    id,
    fields = {
      doc: null,
      linkType: 'custom',
      newTab: false,
      url: undefined,
    },
    key,
  }: {
    fields: LinkFields
    id: string
    key?: NodeKey
  }) {
    super(key)
    this.__fields = fields
    this.__id = id
  }

  static clone(node: LinkNode): LinkNode {
    return new LinkNode({
      id: node.__id,
      fields: node.__fields,
      key: node.__key,
    })
  }

  static getType(): string {
    return 'link'
  }

  static importDOM(): DOMConversionMap | null {
    return {
      a: (node: Node) => ({
        conversion: $convertAnchorElement,
        priority: 1,
      }),
    }
  }

  static importJSON(serializedNode: SerializedLinkNode): LinkNode {
    if (
      serializedNode.version === 1 &&
      typeof serializedNode.fields?.doc?.value === 'object' &&
      serializedNode.fields?.doc?.value?.id
    ) {
      serializedNode.fields.doc.value = serializedNode.fields.doc.value.id
      serializedNode.version = 2
    }

    if (serializedNode.version === 2 && !serializedNode.id) {
      serializedNode.id = new ObjectID.default().toHexString()
      serializedNode.version = 3
    }

    const node = $createLinkNode({
      id: serializedNode.id,
      fields: serializedNode.fields,
    })
    node.setFormat(serializedNode.format)
    node.setIndent(serializedNode.indent)
    node.setDirection(serializedNode.direction)
    return node
  }

  canBeEmpty(): false {
    return false
  }

  canInsertTextAfter(): false {
    return false
  }

  canInsertTextBefore(): false {
    return false
  }

  createDOM(config: EditorConfig): HTMLAnchorElement {
    const element = document.createElement('a')
    if (this.__fields?.linkType === 'custom') {
      element.href = this.sanitizeUrl(this.__fields.url ?? '')
    }
    if (this.__fields?.newTab ?? false) {
      element.target = '_blank'
    }

    if (this.__fields?.newTab === true && this.__fields?.linkType === 'custom') {
      element.rel = manageRel(element.rel, 'add', 'noopener')
    }

    addClassNamesToElement(element, config.theme.link)
    return element
  }

  exportJSON(): SerializedLinkNode {
    const returnObject: SerializedLinkNode = {
      ...super.exportJSON(),
      type: this.getType(),
      fields: this.getFields(),
      version: 3,
    }
    const id = this.getID()
    if (id) {
      returnObject.id = id
    }
    return returnObject
  }

  extractWithChild(
    child: LexicalNode,
    selection: BaseSelection,
    destination: 'clone' | 'html',
  ): boolean {
    if (!$isRangeSelection(selection)) {
      return false
    }

    const anchorNode = selection.anchor.getNode()
    const focusNode = selection.focus.getNode()

    return (
      this.isParentOf(anchorNode) &&
      this.isParentOf(focusNode) &&
      selection.getTextContent().length > 0
    )
  }

  getFields(): LinkFields {
    return this.getLatest().__fields
  }

  getID(): string {
    return this.getLatest().__id
  }

  insertNewAfter(selection: RangeSelection, restoreSelection = true): ElementNodeType | null {
    const element = this.getParentOrThrow().insertNewAfter(selection, restoreSelection)
    if ($isElementNode(element)) {
      const linkNode = $createLinkNode({ fields: this.__fields })
      element.append(linkNode)
      return linkNode
    }
    return null
  }

  isInline(): true {
    return true
  }

  sanitizeUrl(url: string): string {
    try {
      const parsedUrl = new URL(url)
      // eslint-disable-next-line no-script-url
      if (!SUPPORTED_URL_PROTOCOLS.has(parsedUrl.protocol)) {
        return 'about:blank'
      }
    } catch (e) {
      return 'https://'
    }
    return url
  }

  setFields(fields: LinkFields): void {
    const writable = this.getWritable()
    writable.__fields = fields
  }

  updateDOM(prevNode: LinkNode, anchor: HTMLAnchorElement, config: EditorConfig): boolean {
    const url = this.__fields?.url
    const newTab = this.__fields?.newTab
    if (url != null && url !== prevNode.__fields?.url && this.__fields?.linkType === 'custom') {
      anchor.href = url
    }
    if (this.__fields?.linkType === 'internal' && prevNode.__fields?.linkType === 'custom') {
      anchor.removeAttribute('href')
    }

    // TODO: not 100% sure why we're settign rel to '' - revisit
    // Start rel config here, then check newTab below
    if (anchor.rel == null) {
      anchor.rel = ''
    }

    if (newTab !== prevNode.__fields?.newTab) {
      if (newTab ?? false) {
        anchor.target = '_blank'
        if (this.__fields?.linkType === 'custom') {
          anchor.rel = manageRel(anchor.rel, 'add', 'noopener')
        }
      } else {
        anchor.removeAttribute('target')
        anchor.rel = manageRel(anchor.rel, 'remove', 'noopener')
      }
    }

    return false
  }
}

function $convertAnchorElement(domNode: Node): DOMConversionOutput {
  let node: LinkNode | null = null
  if (isHTMLAnchorElement(domNode)) {
    const content = domNode.textContent
    if (content !== null && content !== '') {
      node = $createLinkNode({
        id: new ObjectID.default().toHexString(),
        fields: {
          doc: null,
          linkType: 'custom',
          newTab: domNode.getAttribute('target') === '_blank',
          url: domNode.getAttribute('href') ?? '',
        },
      })
    }
  }
  return { node }
}

export function $createLinkNode({ id, fields }: { fields: LinkFields; id?: string }): LinkNode {
  return $applyNodeReplacement(
    new LinkNode({
      id: id ?? new ObjectID.default().toHexString(),
      fields,
    }),
  )
}

export function $isLinkNode(node: LexicalNode | null | undefined): node is LinkNode {
  return node instanceof LinkNode
}

export const TOGGLE_LINK_COMMAND: LexicalCommand<LinkPayload | null> =
  createCommand('TOGGLE_LINK_COMMAND')

export function $toggleLink(payload: LinkPayload): void {
  const selection = $getSelection()

  if (!$isRangeSelection(selection) && !payload.selectedNodes.length) {
    return
  }
  const nodes = $isRangeSelection(selection) ? selection.extract() : payload.selectedNodes

  if (payload === null) {
    // Remove LinkNodes
    nodes.forEach((node) => {
      const parent = node.getParent()

      if ($isLinkNode(parent)) {
        const children = parent.getChildren()

        for (let i = 0; i < children.length; i += 1) {
          parent.insertBefore(children[i])
        }

        parent.remove()
      }
    })
  } else {
    // Add or merge LinkNodes
    if (nodes.length === 1) {
      const firstNode = nodes[0]
      // if the first node is a LinkNode or if its
      // parent is a LinkNode, we update the URL, target and rel.
      const linkNode: LinkNode | null = $isLinkNode(firstNode)
        ? firstNode
        : $getLinkAncestor(firstNode)
      if (linkNode !== null) {
        linkNode.setFields(payload.fields)

        if (payload.text != null && payload.text !== linkNode.getTextContent()) {
          // remove all children and add child with new textcontent:
          linkNode.append($createTextNode(payload.text))
          linkNode.getChildren().forEach((child) => {
            if (child !== linkNode.getLastChild()) {
              child.remove()
            }
          })
        }
        return
      }
    }

    let prevParent: ElementNodeType | LinkNode | null = null
    let linkNode: LinkNode | null = null

    nodes.forEach((node) => {
      const parent = node.getParent()

      if (parent === linkNode || parent === null || ($isElementNode(node) && !node.isInline())) {
        return
      }

      if ($isLinkNode(parent)) {
        linkNode = parent
        parent.setFields(payload.fields)
        if (payload.text != null && payload.text !== parent.getTextContent()) {
          // remove all children and add child with new textcontent:
          parent.append($createTextNode(payload.text))
          parent.getChildren().forEach((child) => {
            if (child !== parent.getLastChild()) {
              child.remove()
            }
          })
        }
        return
      }

      if (!parent.is(prevParent)) {
        prevParent = parent
        linkNode = $createLinkNode({ fields: payload.fields })

        if ($isLinkNode(parent)) {
          if (node.getPreviousSibling() === null) {
            parent.insertBefore(linkNode)
          } else {
            parent.insertAfter(linkNode)
          }
        } else {
          node.insertBefore(linkNode)
        }
      }

      if ($isLinkNode(node)) {
        if (node.is(linkNode)) {
          return
        }
        if (linkNode !== null) {
          const children = node.getChildren()

          for (let i = 0; i < children.length; i += 1) {
            linkNode.append(children[i])
          }
        }

        node.remove()
        return
      }

      if (linkNode !== null) {
        linkNode.append(node)
      }
    })
  }
}

function $getLinkAncestor(node: LexicalNode): LinkNode | null {
  return $getAncestor(node, (ancestor) => $isLinkNode(ancestor)) as LinkNode
}

function $getAncestor(
  node: LexicalNode,
  predicate: (ancestor: LexicalNode) => boolean,
): LexicalNode | null {
  let parent: LexicalNode | null = node
  while (parent !== null && (parent = parent.getParent()) !== null && !predicate(parent));
  return parent
}

function manageRel(input: string, action: 'add' | 'remove', value: string): string {
  let result: string
  let mutableInput = `${input}`
  if (action === 'add') {
    // if we somehow got out of sync - clean up
    if (mutableInput.includes(value)) {
      const re = new RegExp(value, 'g')
      mutableInput = mutableInput.replace(re, '').trim()
    }
    mutableInput = mutableInput.trim()
    result = mutableInput.length === 0 ? `${value}` : `${mutableInput} ${value}`
  } else {
    const re = new RegExp(value, 'g')
    result = mutableInput.replace(re, '').trim()
  }
  return result
}