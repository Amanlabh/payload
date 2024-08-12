import type { CollectionConfig } from 'payload'

import { lexicalEditor } from '@payloadcms/richtext-lexical'

import { lexicalLocalizedFieldsSlug } from '../../slugs.js'

export const LexicalLocalizedFields: CollectionConfig = {
  slug: lexicalLocalizedFieldsSlug,
  admin: {
    useAsTitle: 'title',
    listSearchableFields: ['title'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'lexicalBlocksSubLocalized',
      type: 'richText',
      admin: {
        description: 'Non-localized field with localized block subfields',
      },
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures],
      }),
    },
    {
      name: 'lexicalBlocksLocalized',
      admin: {
        description: 'Localized field with localized block subfields',
      },
      type: 'richText',
      localized: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures],
      }),
    },
  ],
}
