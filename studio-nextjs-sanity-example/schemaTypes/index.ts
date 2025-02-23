// Rich text annotations used in the block content editor
import annotationLinkEmail from './annotations/linkEmail'
import annotationLinkExternal from './annotations/linkExternal'
import annotationLinkInternal from './annotations/linkInternal'

const annotations = [annotationLinkEmail, annotationLinkExternal, annotationLinkInternal]

// Document types
import page from './documents/page'
import media from './documents/media'
import banner from './documents/banner'
import post from './documents/post'

const documents = [page, media, banner, post]

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
import callout from './objects/module/callout'
import callToAction from './objects/module/callToAction'
import carousel from './objects/module/carousel'
import carouselItem from './objects/module/carouselItem'
import form from './objects/module/form'
import youtubeVideo from './objects/module/youtubeVideo'
import navigationGroup from './objects/global/navigationGroup'
import seo from './objects/seo/seo'
import seoHome from './objects/seo/home'
import seoPage from './objects/seo/page'

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
  callout,
  callToAction,
  carousel,
  carouselItem,
  form,
  youtubeVideo,
  placeholderString,
  seo,
  seoHome,
  seoPage,
]

export const schemaTypes = [...annotations, ...singletons, ...objects, ...blocks, ...documents]
