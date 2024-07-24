import type { I18nClient } from '@payloadcms/translations'
import type {
  AdminViewProps,
  ComponentImportMap,
  EditViewProps,
  ResolvedComponent,
  SanitizedCollectionConfig,
  SanitizedConfig,
} from 'payload'

import React from 'react'

import type { ViewDescriptionProps } from '../../../elements/ViewDescription/index.js'
import type { WithServerSidePropsPrePopulated } from './index.js'
import type { CollectionComponentMap } from './types.js'

// Need to import from client barrel file
// eslint-disable-next-line payload/no-imports-from-exports-dir
import { ViewDescription } from '../../../exports/client/index.js'
import { mapActions } from './actions.js'
import { mapFields } from './fields.js'
import { getComponent } from './getComponent.js'

export const mapCollections = (args: {
  DefaultEditView: React.FC<EditViewProps>
  DefaultListView: React.FC<AdminViewProps>
  WithServerSideProps: WithServerSidePropsPrePopulated
  collections: SanitizedCollectionConfig[]
  componentImportMap: ComponentImportMap
  config: SanitizedConfig
  i18n: I18nClient
  readOnly?: boolean
}): {
  [key: SanitizedCollectionConfig['slug']]: CollectionComponentMap
} => {
  const {
    DefaultEditView,
    DefaultListView,
    WithServerSideProps,
    collections,
    componentImportMap,
    config,
    i18n,
    i18n: { t },
    readOnly: readOnlyOverride,
  } = args

  return collections.reduce((acc, collectionConfig) => {
    const { slug, fields } = collectionConfig

    const internalCollections = ['payload-preferences', 'payload-migrations']

    if (internalCollections.includes(slug)) {
      return acc
    }

    const editViewFromConfig = collectionConfig?.admin?.components?.views?.Edit

    const listViewFromConfig = collectionConfig?.admin?.components?.views?.List

    let CustomEditView: ResolvedComponent<EditViewProps, EditViewProps> = undefined
    let CustomListView: ResolvedComponent<any, any> = undefined

    if (editViewFromConfig?.Default && 'Component' in editViewFromConfig.Default) {
      CustomEditView = getComponent({
        componentImportMap,
        payloadComponent: editViewFromConfig.Default,
      })
    }

    if (listViewFromConfig?.Component) {
      CustomListView = getComponent({
        componentImportMap,
        payloadComponent: listViewFromConfig.Component,
      })
    }

    const Edit: React.FC<EditViewProps> = CustomEditView?.component || DefaultEditView

    const List: React.FC<any> = CustomListView?.component || DefaultListView

    const SaveButtonComponent = getComponent({
      componentImportMap,
      payloadComponent: collectionConfig?.admin?.components?.edit?.SaveButton,
    })

    const SaveButton = SaveButtonComponent?.component ? (
      <WithServerSideProps Component={SaveButtonComponent} />
    ) : undefined

    const SaveDraftButtonComponent = getComponent({
      componentImportMap,
      payloadComponent: collectionConfig?.admin?.components?.edit?.SaveDraftButton,
    })

    const SaveDraftButton = SaveDraftButtonComponent?.component ? (
      <WithServerSideProps Component={SaveDraftButtonComponent} />
    ) : undefined

    const PreviewButtonComponent = getComponent({
      componentImportMap,
      payloadComponent: collectionConfig?.admin?.components?.edit?.PreviewButton,
    })

    const PreviewButton = PreviewButtonComponent?.component ? (
      <WithServerSideProps Component={PreviewButtonComponent} />
    ) : undefined

    const PublishButtonComponent = getComponent({
      componentImportMap,
      payloadComponent: collectionConfig?.admin?.components?.edit?.PublishButton,
    })

    const PublishButton = PublishButtonComponent?.component ? (
      <WithServerSideProps Component={PublishButtonComponent} />
    ) : undefined

    const UploadComponent = getComponent({
      componentImportMap,
      payloadComponent: collectionConfig?.admin?.components?.edit?.Upload,
    })

    const Upload = UploadComponent?.component ? (
      <WithServerSideProps Component={UploadComponent} />
    ) : undefined

    const beforeList = collectionConfig?.admin?.components?.beforeList

    const BeforeList =
      (beforeList &&
        Array.isArray(beforeList) &&
        beforeList?.map((Component, i) => (
          <WithServerSideProps
            Component={getComponent({
              componentImportMap,
              payloadComponent: Component,
            })}
            key={i}
          />
        ))) ||
      null

    const beforeListTable = collectionConfig?.admin?.components?.beforeListTable

    const BeforeListTable =
      (beforeListTable &&
        Array.isArray(beforeListTable) &&
        beforeListTable?.map((Component, i) => (
          <WithServerSideProps
            Component={getComponent({
              componentImportMap,
              payloadComponent: Component,
            })}
            key={i}
          />
        ))) ||
      null

    const afterList = collectionConfig?.admin?.components?.afterList

    const AfterList =
      (afterList &&
        Array.isArray(afterList) &&
        afterList?.map((Component, i) => (
          <WithServerSideProps
            Component={getComponent({
              componentImportMap,
              payloadComponent: Component,
            })}
            key={i}
          />
        ))) ||
      null

    const afterListTable = collectionConfig?.admin?.components?.afterListTable

    const AfterListTable =
      (afterListTable &&
        Array.isArray(afterListTable) &&
        afterListTable?.map((Component, i) => (
          <WithServerSideProps
            Component={getComponent({
              componentImportMap,
              payloadComponent: Component,
            })}
            key={i}
          />
        ))) ||
      null

    let description = undefined
    if (collectionConfig.admin && 'description' in collectionConfig.admin) {
      if (
        typeof collectionConfig.admin?.description === 'string' ||
        typeof collectionConfig.admin?.description === 'object'
      ) {
        description = collectionConfig.admin.description
      } else if (typeof collectionConfig.admin?.description === 'function') {
        description = collectionConfig.admin?.description({ t })
      }
    }

    const descriptionProps: ViewDescriptionProps = {
      description,
    }

    const DescriptionComponent =
      getComponent({
        componentImportMap,
        payloadComponent: collectionConfig.admin?.components?.edit?.Description,
      }) || (description ? { component: ViewDescription } : undefined)

    const Description = DescriptionComponent?.component ? (
      <WithServerSideProps Component={DescriptionComponent} {...(descriptionProps || {})} />
    ) : undefined

    const componentMap: CollectionComponentMap = {
      AfterList,
      AfterListTable,
      BeforeList,
      BeforeListTable,
      Description,
      Edit: <Edit collectionSlug={collectionConfig.slug} />,
      List: <List collectionSlug={collectionConfig.slug} />,
      PreviewButton,
      PublishButton,
      SaveButton,
      SaveDraftButton,
      Upload,
      actionsMap: mapActions({
        WithServerSideProps,
        collectionConfig,
        componentImportMap,
      }),
      fieldMap: mapFields({
        WithServerSideProps,
        componentImportMap,
        config,
        fieldSchema: fields,
        i18n,
        readOnly: readOnlyOverride,
      }),
      isPreviewEnabled: !!collectionConfig?.admin?.preview,
    }

    return {
      ...acc,
      [slug]: componentMap,
    }
  }, {})
}
