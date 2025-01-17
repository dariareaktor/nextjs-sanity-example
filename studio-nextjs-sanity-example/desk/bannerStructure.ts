import {ListItemBuilder} from 'sanity/structure'
import defineStructure from '../utils/defineStructure'
import {SparklesIcon} from '@sanity/icons'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Banners')
    .icon(SparklesIcon)
    .schemaType('banner')
    .child(S.documentTypeList('banner')),
)
