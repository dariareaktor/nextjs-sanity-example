import {defineField, defineType} from 'sanity'
import {StarIcon} from '@sanity/icons'

export const promotionType = defineType({
  name: 'promotion',
  type: 'document',
  title: 'Promotion',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'link',
      type: 'url',
    }),
  ],
  icon: StarIcon,
  preview: {
    select: {
      title: 'heading',
      image: 'image',
    },
    prepare({title, image}) {
      return {
        title: title || 'Untitled',
        subtitle: 'Reference to promotion',
        media: image || StarIcon,
      }
    },
  },
})
