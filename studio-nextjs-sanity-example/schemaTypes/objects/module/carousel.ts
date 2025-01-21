import {defineType, defineField} from 'sanity'
import {ImagesIcon} from '@sanity/icons'

export default defineType({
  name: 'module.carousel',
  title: 'Carousel',
  type: 'object',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'carouselItems',
      title: 'Carousel items',
      type: 'array',
      of: [{type: 'carouselItem'}],
      validation: (Rule) => Rule.min(3).required(),
    }),
    defineField({
      name: 'autoplay',
      title: 'Autoplay',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      text: 'text',
    },
    prepare(selection) {
      const {text} = selection
      return {
        title: text || 'Untitled Carousel',
        subtitle: 'Image Carousel',
        media: ImagesIcon,
      }
    },
  },
})
