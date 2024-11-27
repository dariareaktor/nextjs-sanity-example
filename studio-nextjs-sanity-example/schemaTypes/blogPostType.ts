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
      name: 'date',
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
      name: 'description',
      title: 'Short Description',
      type: 'string',
    }),
  ],
  icon: BookIcon,
  preview: {
    select: {
      title: 'title',
      media: 'image',
      mediaType: 'mediaType',
      alt: 'alt',
    },
    prepare(selection) {
      const {title, media, alt} = selection
      return {
        title: title ?? 'Untitled Product',
        subtitle: alt,
        media: media ?? BookIcon,
      }
    },
  },
})
