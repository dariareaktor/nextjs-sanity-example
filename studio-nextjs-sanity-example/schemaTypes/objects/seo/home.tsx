import {defineField} from 'sanity'

export default defineField({
  name: 'seo.home',
  title: 'SEO',
  type: 'object',
  options: {
    collapsed: false,
    collapsible: true,
  },
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) =>
        Rule.max(50).warning('Longer titles may be truncated by search engines'),
    }),
  ],
  validation: (Rule) => Rule.required(),
})
