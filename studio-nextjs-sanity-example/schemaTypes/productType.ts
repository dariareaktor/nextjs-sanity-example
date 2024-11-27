import {defineField, defineType} from 'sanity'
import {TrolleyIcon} from '@sanity/icons'

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Product Image',
      type: 'reference',
      to: [{type: 'media'}],
    }),
  ],
  icon: TrolleyIcon,
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
        media: media ?? TrolleyIcon,
      }
    },
  },
})
