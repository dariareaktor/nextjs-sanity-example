import {defineType, defineField} from 'sanity'
import {DocumentVideoIcon} from '@sanity/icons'

export default defineType({
  name: 'module.youtubeVideo',
  title: 'YouTube Video',
  type: 'object',
  fields: [
    defineField({
      name: 'url',
      title: 'Video URL',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
          allowRelative: false,
        }).required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'Optional caption for the video',
    }),
  ],
  preview: {
    select: {
      title: 'caption',
      subtitle: 'url',
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'YouTube Video',
        subtitle: subtitle,
        media: DocumentVideoIcon,
      }
    },
  },
})
