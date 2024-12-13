import {CloseCircleIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export default defineField({
  name: 'notFoundPage',
  title: '404 page',
  type: 'document',
  icon: CloseCircleIcon,
  groups: [
    {
      default: true,
      name: 'editorial',
      title: 'Editorial',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'editorial',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
      rows: 2,
      group: 'editorial',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),
  ],
  preview: {
    prepare() {
      return {
        // media: icon,
        title: '404 Page',
      }
    },
  },
})
