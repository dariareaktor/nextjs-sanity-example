import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Internal Link', value: 'internal'},
          {title: 'External Link', value: 'external'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'internal',
      title: 'Internal Link',
      type: 'linkInternal',
      hidden: ({parent}) => parent?.type !== 'internal',
      options: {
        collapsible: false, // Ensure it's expanded
        collapsed: false,
      },
    }),
    defineField({
      name: 'external',
      title: 'External Link',
      type: 'linkExternal',
      hidden: ({parent}) => parent?.type !== 'external',
      options: {
        collapsible: false, // Ensure it's expanded
        collapsed: false,
      },
    }),
  ],
})
