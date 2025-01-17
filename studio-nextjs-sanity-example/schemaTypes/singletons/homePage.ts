import {HomeIcon} from '@sanity/icons'
import {defineField} from 'sanity'

const TITLE = 'Home'

export default defineField({
  name: 'home',
  title: TITLE,
  type: 'document',
  icon: HomeIcon,
  groups: [
    {
      default: true,
      name: 'editorial',
      title: 'Editorial',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'hero',
      group: 'editorial',
    }),
    defineField({
      name: 'modules',
      title: 'Page builder',
      description: 'Page modules and sections',
      type: 'array',
      of: [
        {type: 'module.callout'},
        {type: 'module.callToAction'},
        {type: 'module.youtubeVideo'},
        {type: 'module.form'},
        {type: 'module.carousel'},
      ],
      group: 'editorial',
    }),
    // SEO
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo.home',
      group: 'seo',
    }),
  ],
  preview: {
    prepare() {
      return {
        // media: icon,
        subtitle: 'Index',
        title: TITLE,
      }
    },
  },
})
