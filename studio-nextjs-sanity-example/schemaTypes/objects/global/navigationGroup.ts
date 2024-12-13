import {ChevronDownIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  name: 'navigationGroup',
  title: 'Navigation group',
  type: 'object',
  icon: ChevronDownIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      validation: (Rule) => Rule.unique().max(10),
      of: [{type: 'linkInternal'}],
    }),
  ],
})
