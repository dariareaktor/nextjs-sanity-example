import {defineField, defineType} from 'sanity'
import {EnvelopeIcon} from '@sanity/icons'

export const formType = defineType({
  name: 'form',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
    }),
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      name: 'form',
      type: 'string',
      description: 'Select form type',
      options: {
        list: ['newsletter', 'register', 'contact'],
      },
    }),
  ],
  icon: EnvelopeIcon,
  preview: {
    select: {
      title: 'heading',
      image: 'image',
    },
    prepare({title, image}) {
      return {
        title: title || 'Untitled',
        subtitle: 'Form',
        media: image || EnvelopeIcon,
      }
    },
  },
})
