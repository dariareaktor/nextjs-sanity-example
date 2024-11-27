import {defineField, defineType} from 'sanity'
import {ComponentIcon} from '@sanity/icons'

export const cardsSectionType = defineType({
  name: 'cards',
  title: 'Cards Page Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          {title: 'Grid', value: 'grid'},
          {title: 'Vertical List', value: 'verticalList'},
          {title: 'Horizontal List', value: 'horizontalList'},
          {title: 'Carousel', value: 'carousel'},
        ],
        layout: 'radio',
      },
      initialValue: 'Grid',
    }),
    defineField({
      name: 'cardsSource',
      title: 'Cards Source',
      type: 'string',
      options: {
        list: [
          {title: 'Products', value: 'product'},
          {title: 'Blog Posts', value: 'blogPost'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'productItems',
      title: 'Products',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'product'}],
        },
      ],
      hidden: ({parent}) => parent?.cardsSource !== 'product',
    }),
    defineField({
      name: 'blogPostItems',
      title: 'Blog Posts',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'blogPost'}],
        },
      ],
      hidden: ({parent}) => parent?.cardsSource !== 'blogPost',
    }),
  ],
  icon: ComponentIcon,
  preview: {
    select: {
      title: 'settings.title',
      layout: 'layout',
      cardsSource: 'cardsSource',
    },
    prepare({title, layout, cardsSource}) {
      return {
        title: title || 'Untitled Cards Page Section',
        subtitle: `${layout ? layout.charAt(0).toUpperCase() + layout.slice(1) : 'Layout'} - ${
          cardsSource ? cardsSource.charAt(0).toUpperCase() + cardsSource.slice(1) : 'Cards Source'
        }`,
        media: ComponentIcon,
      }
    },
  },
})
