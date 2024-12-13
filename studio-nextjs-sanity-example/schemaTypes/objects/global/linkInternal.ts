import {LinkIcon} from '@sanity/icons'
import {defineField} from 'sanity'

const PAGE_REFERENCES = [{type: 'home'}, {type: 'page'}]

export default defineField({
  title: 'Internal Link',
  name: 'linkInternal',
  type: 'object',
  icon: LinkIcon,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'reference',
      type: 'reference',
      weak: true,
      validation: (Rule) => Rule.required(),
      to: PAGE_REFERENCES,
    },
  ],
  preview: {
    select: {
      reference: 'reference',
      referenceProductTitle: 'reference.store.title',
      referenceProductPriceRange: 'reference.store.priceRange',
      referenceTitle: 'reference.title',
      referenceType: 'reference._type',
      title: 'title',
    },
    prepare(selection) {
      const {
        reference,
        referenceProductPriceRange,
        referenceProductTitle,
        referenceTitle,
        referenceType,
        title,
      } = selection

      let subtitle = []
      if (reference) {
        subtitle.push([`→ ${referenceTitle || referenceProductTitle || reference?._id}`])
        if (referenceType === 'product' && referenceProductPriceRange) {
          subtitle.push(`(${referenceProductPriceRange})`)
        }
      } else {
        subtitle.push('(Nonexistent document reference)')
      }

      return {
        // media: image,
        subtitle: subtitle.join(' '),
        title,
      }
    },
  },
})
