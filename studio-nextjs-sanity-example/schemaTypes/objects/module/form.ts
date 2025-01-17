import {defineType, defineField} from 'sanity'
import {InfoFilledIcon} from '@sanity/icons'

export default defineType({
  name: 'module.form',
  title: 'Form',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Form Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fields',
      title: 'Form Fields',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Field Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'type',
              title: 'Field Type',
              type: 'string',
              options: {
                list: ['text', 'email', 'textarea'],
                layout: 'dropdown',
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'placeholder',
              title: 'Placeholder',
              type: 'string',
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title || 'Form',
        media: InfoFilledIcon,
      }
    },
  },
})
