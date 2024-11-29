import {defineField, defineType} from 'sanity'
import {ComponentIcon} from '@sanity/icons'

export const cardsGridType = defineType({
  name: 'cardsGridSection',
  title: 'Cards Grid Section',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
    }),
    defineField({
      name: 'maxColumns',
      title: 'Maximum Columns Count',
      description:
        'Depending on the screen size and text size there can be less columns, but no more than this setting tells.',
      type: 'number',
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
      initialValue: 'product',
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
      heading: 'heading',
      subheading: 'subheading',
    },
    prepare({heading, subheading}) {
      return {
        title: heading || 'Untitled Cards Grid',
        subtitle: subheading,
        media: ComponentIcon,
      }
    },
  },
})
