import {ListItemBuilder} from 'sanity/structure'
import {DocumentsIcon} from '@sanity/icons'
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Pages')
    .icon(DocumentsIcon)
    .schemaType('page')
    .child(S.documentTypeList('page')),
)
