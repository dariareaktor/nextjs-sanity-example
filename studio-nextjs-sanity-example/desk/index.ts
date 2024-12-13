/**
 * Desk structure overrides
 */
import {ListItemBuilder, StructureResolver} from 'sanity/structure'
import home from './homeStructure'
import notFoundPage from './notFoundPageStructure'
import pages from './pageStructure'
import media from './mediaStructure'
import navigation from './navigationStructure'
import settings from './settingStructure'

/**
 * Desk structure overrides
 *
 * Sanity Studio automatically lists document types out of the box.
 * With this custom desk structure we achieve things like showing the `home`
 * and `settings` document types as singletons, and grouping product details
 * and variants for easy editorial access.
 *
 * You can customize this even further as your schemas progress.
 * To learn more about structure builder, visit our docs:
 * https://www.sanity.io/docs/overview-structure-builder
 */

// If you add document types to desk structure manually, you can add them to this function to prevent duplicates in the root pane
const hiddenDocTypes = (listItem: ListItemBuilder) => {
  const id = listItem.getId()

  if (!id) {
    return false
  }

  return ![
    'collection',
    'home',
    'page',
    'notFoundPage',
    'media',
    'navigation',
    'settings',
  ].includes(id)
}

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Content')
    .items([
      home(S, context),
      pages(S, context),
      notFoundPage(S, context),
      S.divider(),
      media(S, context),
      S.divider(),
      navigation(S, context),
      S.divider(),
      settings(S, context),
      S.divider(),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
