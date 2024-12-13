import {ListItemBuilder} from 'sanity/structure'
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('Navigation')
    .schemaType('navigation')
    .child(S.editor().title('Navigation').schemaType('navigation').documentId('navigation')),
)
