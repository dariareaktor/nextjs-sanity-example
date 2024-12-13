import {ListItemBuilder} from 'sanity/structure'
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S) =>
  S.listItem()
    .title('404 page')
    .schemaType('notFoundPage')
    .child(S.editor().title('404 Page').schemaType('notFoundPage').documentId('notFoundPage')),
)
