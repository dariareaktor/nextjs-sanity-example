import {defineField} from 'sanity'

export default defineField({
  name: 'body',
  title: 'Body',
  type: 'array',
  of: [
    {
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'},
      ],
      marks: {
        decorators: [
          {
            title: 'Italic',
            value: 'em',
          },
          {
            title: 'Strong',
            value: 'strong',
          },
        ],
        annotations: [
          // Internal link
          {
            name: 'annotationLinkInternal',
            type: 'annotationLinkInternal',
          },
          // URL
          {
            name: 'annotationLinkExternal',
            type: 'annotationLinkExternal',
          },
        ],
      },
      // Paragraphs
      type: 'block',
    },
    // Custom blocks
    {
      name: 'imageReference',
      title: 'Image Reference',
      type: 'reference',
      to: [{type: 'media'}],
    },
    {
      type: 'module.youtubeVideo',
    },
    {
      type: 'module.accordion',
    },
  ],
})
