import {defineField, defineType} from 'sanity'
import {BookIcon} from '@sanity/icons'

export const blogPostType = defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'publishDate',
      title: 'Publish Date',
      type: 'date',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Tips', value: 'tips'},
          {title: 'Announcement', value: 'announcement'},
        ],
      },
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {type: 'block'},
        {
          name: 'imageReference',
          title: 'Image Reference',
          type: 'reference',
          to: [{type: 'media'}],
        },
      ],
    }),
  ],
  icon: BookIcon,
  preview: {
    select: {
      title: 'title',
      publishDate: 'publishDate',
      category: 'category',
    },
    prepare(selection) {
      const {title, publishDate, category} = selection
      return {
        title: title ?? 'Untitled Blog Post',
        subtitle: `${category} - ${publishDate.toString()}`,
        media: BookIcon,
      }
    },
  },
})
