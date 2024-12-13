import {ListItemBuilder} from 'sanity/structure'
import {ImageIcon} from '@sanity/icons'
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Media')
    .icon(ImageIcon)
    .schemaType('media')
    .child(S.documentTypeList('media')),
)
