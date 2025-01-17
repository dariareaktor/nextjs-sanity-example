// Rich text annotations used in the block content editor
import annotationLinkEmail from './annotations/linkEmail'
import annotationLinkExternal from './annotations/linkExternal'
import annotationLinkInternal from './annotations/linkInternal'

const annotations = [annotationLinkEmail, annotationLinkExternal, annotationLinkInternal]

// Document types
import page from './documents/page'
import media from './documents/media'

const documents = [page, media]

// Singleton document types
import homePage from './singletons/homePage'
import notFoundPage from './singletons/notFoundPage'
import navigation from './singletons/navigation'
import settings from './singletons/settings'

const singletons = [homePage, notFoundPage, navigation, settings]

// Block content
import body from './blocks/body'

const blocks = [body]

// Object types
import linkExternal from './objects/global/linkExternal'
import linkInternal from './objects/global/linkInternal'
import link from './objects/global/link'
import heroHome from './objects/module/homeHero'
import moduleAccordion from './objects/module/accordion'
import accordionBody from './objects/module/accordionBody'
import accordionGroup from './objects/module/accordionGroup'
import moduleCallout from './objects/module/callout'
import moduleCallToAction from './objects/module/callToAction'
import moduleGrid from './objects/module/grid'
import gridItems from './objects/module/gridItem'
import navigationGroup from './objects/global/navigationGroup'
import seo from './objects/seo/seo'
import seoHome from './objects/seo/home'
import seoPage from './objects/seo/page'
import seoDescription from './objects/seo/description'

// Collections
import placeholderString from './objects/global/placeholderString'

const objects = [
  linkExternal,
  linkInternal,
  link,
  heroHome,
  moduleAccordion,
  accordionBody,
  accordionGroup,
  navigationGroup,
  moduleCallout,
  moduleCallToAction,
  moduleGrid,
  gridItems,
  placeholderString,
  seo,
  seoHome,
  seoPage,
  seoDescription,
]

export const schemaTypes = [...annotations, ...singletons, ...objects, ...blocks, ...documents]
