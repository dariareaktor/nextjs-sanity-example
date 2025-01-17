import {MenuIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  icon: MenuIcon,
  groups: [
    {
      default: true,
      name: 'header',
      title: 'Header',
    },
    {
      name: 'footer',
      title: 'Footer',
    },
  ],
  fields: [
    defineField({
      name: 'headerNavigation',
      title: 'Header Navigation',
      type: 'array',
      of: [{type: 'linkInternal'}, {type: 'navigationGroup'}],
      validation: (Rule) => Rule.required(),
      group: 'header',
    }),
    defineField({
      name: 'footerNavigation',
      title: 'Footer Navigation',
      type: 'array',
      of: [{type: 'linkInternal'}, {type: 'navigationGroup'}],
      validation: (Rule) => Rule.required(),
      group: 'footer',
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
