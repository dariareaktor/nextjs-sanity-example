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
      // @ts-ignore - TODO - fix this TS error
      validation: async (Rule) =>
        Rule.custom(async (isVisible, context) => {
          if (isVisible) {
            const {getClient} = context
            const client = getClient({apiVersion: '2023-01-01'})

            const visibleBanners = await client.fetch(
              `count(*[_type == "banner" && isVisible == true])`,
            )

            if (visibleBanners > 0) {
              return 'Only one banner can be visible at a time.'
            }
          }
          return true
        }),
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
