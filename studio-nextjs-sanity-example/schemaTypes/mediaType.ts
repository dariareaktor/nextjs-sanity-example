import {defineField, defineType} from 'sanity'
import {ImageIcon} from '@sanity/icons'

export const mediaType = defineType({
  name: 'media',
  title: 'Media',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    // defineField({
    //   name: 'mediaType',
    //   title: 'Media Type',
    //   type: 'string',
    //   options: {
    //     list: [
    //       {title: 'Image', value: 'image'},
    //       //   {title: 'Video', value: 'video'},
    //     ],
    //     layout: 'radio',
    //   },
    //   initialValue: 'image',
    //   validation: (rule) => rule.required(),
    // }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      //   validation: (rule) =>
      //     rule.custom((value, context) => {
      //       if (context.document?.mediaType === 'image' && !value) {
      //         return 'An image is required for media type "image"'
      //       }
      //       return true
      //     }),
    }),
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      description: 'A brief description of the image for accessibility and SEO.',
      //   validation: (rule) =>
      //     rule.custom((value, context) => {
      //       if (context.document?.mediaType === 'image' && !value) {
      //         return 'An image alt text is required for media type "image"'
      //       }
      //       return true
      //     }),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'A short text to display below the image (optional).',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Hero', value: 'hero'},
          {title: 'Gallery', value: 'gallery'},
          {title: 'Background', value: 'background'},
        ],
      },
    }),
  ],
  icon: ImageIcon,
  preview: {
    select: {
      title: 'title',
      media: 'image',
      mediaType: 'mediaType',
      alt: 'alt',
    },
    prepare(selection) {
      const {title, media, mediaType, alt} = selection
      return {
        title: title ?? 'Untitled Media',
        // subtitle: `${mediaType ?? 'Unknown type'}${alt ? ` – ${alt}` : ''}`,
        subtitle: alt,
        media: media ?? ImageIcon,
      }
    },
  },
})
