import {defineType, defineField} from 'sanity'
import {SparklesIcon} from '@sanity/icons'

export default defineType({
  name: 'banner',
  title: 'Banner',
  type: 'document',
  icon: SparklesIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isVisible',
      title: 'Is Visible',
      type: 'boolean',
      description: 'Mark this banner as visible on all pages.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title,
        media: SparklesIcon,
      }
    },
  },
})
