import {ListItemBuilder} from 'sanity/structure'
import defineStructure from '../utils/defineStructure'
import {DocumentTextIcon} from '@sanity/icons'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Posts')
    .icon(DocumentTextIcon)
    .schemaType('post')
    .child(S.documentTypeList('post')),
)
