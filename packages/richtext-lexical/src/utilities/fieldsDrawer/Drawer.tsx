'use client'
import type { FieldMap } from '@payloadcms/ui'
import type { Data, FormState, JsonObject } from 'payload'

import { Drawer } from '@payloadcms/ui'
import React from 'react'

import { DrawerContent } from './DrawerContent.js'

export type FieldsDrawerProps = {
  className?: string
  data?: Data
  drawerSlug: string
  drawerTitle?: string
  featureKey: string
  fieldMapOverride?: FieldMap
  handleDrawerSubmit: (fields: FormState, data: JsonObject) => void
  schemaFieldsPathOverride?: string
  schemaPathSuffix?: string
}

/**
 * This FieldsDrawer component can be used to easily create a Drawer that contains a form with fields within your feature.
 * The fields are taken directly from the schema map based on your `featureKey` and `schemaPathSuffix`. Thus, this can only
 * be used if you provide your field schema inside the `generateSchemaMap` prop of your feature.server.ts.
 */
export const FieldsDrawer: React.FC<FieldsDrawerProps> = ({
  className,
  data,
  drawerSlug,
  drawerTitle,
  featureKey,
  fieldMapOverride,
  handleDrawerSubmit,
  schemaFieldsPathOverride,
  schemaPathSuffix,
}) => {
  // The Drawer only renders its children (and itself) if it's open. Thus, by extracting the main content
  // to DrawerContent, this should be faster
  return (
    <Drawer className={className} slug={drawerSlug} title={drawerTitle ?? ''}>
      <DrawerContent
        data={data}
        featureKey={featureKey}
        fieldMapOverride={fieldMapOverride}
        handleDrawerSubmit={handleDrawerSubmit}
        schemaFieldsPathOverride={schemaFieldsPathOverride}
        schemaPathSuffix={schemaPathSuffix}
      />
    </Drawer>
  )
}
