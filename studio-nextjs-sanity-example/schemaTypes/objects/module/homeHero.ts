import {defineField} from 'sanity'

export default defineField({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  options: {
    collapsed: false,
    collapsible: true,
  },
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
      name: 'link',
      title: 'Link',
      type: 'link',
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
              {title: 'Left', value: 'left'},
              {title: 'Right', value: 'right'},
            ],
            layout: 'radio',
          },
          initialValue: 'right',
        },
      ],
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background color',
      type: 'string',
      options: {
        list: [
          {title: 'Light', value: 'light'},
          {title: 'Dark', value: 'dark'},
        ],
        layout: 'radio',
      },
      initialValue: 'light',
    }),
  ],
})
