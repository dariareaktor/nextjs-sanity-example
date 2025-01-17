import {defineType, defineField} from 'sanity'
import {ImagesIcon} from '@sanity/icons'

export default defineType({
  name: 'module.carousel',
  title: 'Carousel',
  type: 'object',
  fields: [
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          name: 'imageReference',
          title: 'Image Reference',
          type: 'reference',
          to: [{type: 'media'}],
        },
      ],
      validation: (Rule) => Rule.min(2).required(), // Minimum 2 images
    }),
    defineField({
      name: 'autoplay',
      title: 'Autoplay',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Carousel',
        subtitle: 'Image Carousel',
        media: ImagesIcon,
      }
    },
  },
})
