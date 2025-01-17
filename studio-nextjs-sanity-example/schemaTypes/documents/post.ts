import {defineType, defineField} from 'sanity'
import {DocumentTextIcon} from '@sanity/icons'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishDate',
      title: 'Publish Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'body',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'publishDate',
    },
    prepare({title, subtitle}) {
      return {
        title,
        subtitle: `Published on: ${new Date(subtitle).toLocaleDateString()}`,
        media: DocumentTextIcon,
      }
    },
  },
})
