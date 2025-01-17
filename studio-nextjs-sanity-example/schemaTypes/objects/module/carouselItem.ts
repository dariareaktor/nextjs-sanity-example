import {defineType, defineField} from 'sanity'
import {ImageIcon} from '@sanity/icons'

export default defineType({
  name: 'carouselItem',
  title: 'Carousel item',
  type: 'object',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imageReference',
      title: 'Image Reference',
      type: 'reference',
      to: [{type: 'media'}],
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      text: 'text',
      media: 'imageReference.image',
    },
    prepare(selection) {
      const {text, media} = selection
      return {
        title: text || 'Carousel item',
        media: media,
      }
    },
  },
})
