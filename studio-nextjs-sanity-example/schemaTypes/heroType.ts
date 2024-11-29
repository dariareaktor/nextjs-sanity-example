import {defineField, defineType} from 'sanity'
import {DocumentTextIcon} from '@sanity/icons'

export const heroType = defineType({
  name: 'heroSection',
  title: 'Hero Section',
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
      name: 'callToAction',
      title: 'Call To Action',
      type: 'object',
      fields: [
        {
          name: 'callToActionText',
          title: 'Text',
          type: 'string',
        },
        {
          name: 'callToActionLink',
          title: 'Link',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'object',
      fields: [
        {
          name: 'imageReference',
          title: 'Image Reference',
          type: 'reference',
          to: [{type: 'media'}],
        },
        {
          name: 'imagePosition',
          title: 'Image Position',
          type: 'string',
          options: {
            list: [
              {title: 'Background', value: 'background'},
              {title: 'Left', value: 'left'},
              {title: 'Right', value: 'right'},
            ],
            layout: 'radio',
          },
          initialValue: 'background',
        },
      ],
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      options: {
        list: [
          {title: 'Transparent', value: 'transparent'},
          {title: 'Contrast color', value: 'contrast'},
        ],
        layout: 'radio',
      },
      initialValue: 'transparent',
    }),
  ],
  icon: DocumentTextIcon,
  preview: {
    select: {
      title: 'heading',
      media: 'image.imageReference.image',
    },
    prepare({title, media}) {
      return {
        title: title || 'Untitled',
        subtitle: 'Hero section',
        media: media || DocumentTextIcon,
      }
    },
  },
})
