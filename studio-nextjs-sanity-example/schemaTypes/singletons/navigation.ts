import {MenuIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  icon: MenuIcon,
  fields: [
    defineField({
      name: 'navigation',
      title: 'Navigation items',
      type: 'array',
      of: [{type: 'linkInternal'}, {type: 'navigationGroup'}],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        // media: icon,
        title: 'Navigation',
      }
    },
  },
})
