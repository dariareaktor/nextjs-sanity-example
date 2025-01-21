import {DocumentIcon} from '@sanity/icons'
import {defineField} from 'sanity'

import {validateSlug} from '../../utils/validateSlug'

export default defineField({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: DocumentIcon,
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
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'editorial',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      group: 'editorial',
      // @ts-ignore - TODO - fix this TS error
      validation: validateSlug,
    }),
    defineField({
      name: 'pageBuilder',
      title: 'Page Builder',
      type: 'array',
      of: [
        {type: 'module.youtubeVideo'},
        {type: 'module.form'},
        {type: 'module.carousel'},
        {type: 'module.callout'},
        {type: 'module.callToAction'},
        {type: 'module.accordion'},
      ],
      group: 'editorial',
    }),
    // SEO
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo.page',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      seoImage: 'seo.image',
      title: 'title',
      subtitle: 'slug.current',
    },
    prepare(selection) {
      const {seoImage, subtitle, title} = selection

      return {
        media: seoImage,
        title,
        subtitle: `Slug: /${subtitle}`,
      }
    },
  },
})
