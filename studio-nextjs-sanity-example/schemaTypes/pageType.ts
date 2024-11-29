import {defineArrayMember, defineField, defineType} from 'sanity'
import {DocumentIcon} from '@sanity/icons'
import {isUniqueAcrossAllDocuments} from '../lib/isUniqueAcrossAllDocuments'
import {isHomePageUnique} from '../lib/isHomePageUnique'

export const pageType = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (rule) => rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: isUniqueAcrossAllDocuments,
      },
    }),
    defineField({
      name: 'isHomePage',
      title: 'Is Home Page?',
      type: 'boolean',
      description: 'Mark this page as the home page. Only one page can have this flag enabled.',
      // validation: (Rule) => Rule.custom(isHomePageUnique),
    }),
    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      of: [
        defineArrayMember({
          name: 'heroSection',
          title: 'Hero Section',
          type: 'heroSection',
        }),
        defineArrayMember({
          name: 'cardsGridSection',
          title: 'Cards Grid Section',
          type: 'cardsGridSection',
        }),
        defineArrayMember({
          name: 'imageReference',
          title: 'Image Reference',
          type: 'reference',
          to: [{type: 'media'}],
        }),
        // defineArrayMember({
        //   name: 'referenceToSection',
        //   title: 'Reusable section',
        //   type: 'reference',
        //   to: [{type: 'section'}],
        // }),
      ],
      validation: (Rule) => Rule.required().min(1).error('A page must have at least one block'),
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
        },
      ],
    }),
  ],
  icon: DocumentIcon,
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare(selection) {
      const {title, media} = selection
      return {
        title: title ?? 'Currently no title, set one inside this block',
        media: media ?? DocumentIcon,
      }
    },
  },
})
