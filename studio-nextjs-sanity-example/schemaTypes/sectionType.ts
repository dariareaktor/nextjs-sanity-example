import {defineField, defineType} from 'sanity'
import {DocumentTextIcon} from '@sanity/icons'

export const sectionType = defineType({
  name: 'section',
  title: 'Page Section',
  type: 'document',
  fields: [
    defineField({
      name: 'type',
      title: 'Section Type',
      type: 'string',
      options: {
        list: [{title: 'Banner', value: 'banner'}],
      },
      validation: (rule) => rule.required(),
    }),
    // defineField({
    //   name: 'settings',
    //   title: 'Settings',
    //   type: 'object',
    //   fields: [
    //     {name: 'alignment', title: 'Alignment', type: 'string'},
    //     {name: 'backgroundColor', title: 'Background Color', type: 'string'},
    //   ],
    // }),
  ],
  icon: DocumentTextIcon,
  preview: {
    select: {
      title: 'heading',
      image: 'image',
    },
    prepare({title, image}) {
      return {
        title: title || 'Untitled',
        subtitle: '',
        media: image || DocumentTextIcon,
      }
    },
  },
})
