import { client } from "@/sanity/client";
import { Hero as HeroData } from "@/types/Hero";
import { CallToAction as CallToActionData } from "@/types/CallToAction";
import { Callout as CalloutData } from "@/types/Callout";
import { Seo } from "@/types/HomeSeo";
import { Hero } from "@/components/Hero";
import { Callout } from "@/components/Callout";
import { CallToAction } from "@/components/CallToAction";
import { YoutubeData } from "@/types/YoutubeData";
import { YoutubeVideo } from "@/components/YoutubeVideo";
import { CarouselData } from "@/types/CarouselData";
import { CarouselSection } from "@/components/Carousel";
import { AccordionData } from "@/types/AccordionData";
import { AccordionSection } from "@/components/AccordionSection";
import { FormData } from "@/types/FormData";
import { FormSection } from "@/components/FormSection";

const PAGE_QUERY = `*[_type == "home"][0]{
  hero {
    heading,
    subheading,
    link {
        type,
        type == "internal" => {
          "internal": internal {
            title,
            "slug": reference->slug.current
          }
        },
        type == "external" => {
          "external": external {
            title,
            url,
          }
        }
      },
    image {
      imageReference->{
          "url": image.asset->url,
          alt
        },
      imagePosition
    },
    backgroundColor
  },
  modules[] {
    _type == "module.callout" => {
     _type,
      text,
      link {
        type,
        type == "internal" => {
          "internal": internal {
            title,
            "slug": reference->slug.current
          }
        },
        type == "external" => {
          "external": external {
            title,
            url,
          }
        }
      }
    },
    _type == "module.callToAction" => {
      _type,
      layout,
      title,
      body,
      link {
        type,
        type == "internal" => {
          "internal": internal {
            title,
            "slug": reference->slug.current
          }
        },
        type == "external" => {
          "external": external {
            title,
            url,
          }
        }
      },
      imageReference->{
          "url": image.asset->url,
          alt
        }
    },
    _type == "module.youtubeVideo" => {
      _type,
      url,
    },
    _type == "module.form" => {
      _type,
      title,
      fields[] {
        label,
        type,
        placeholder,
      }
    },
    _type == "module.carousel" => {
      _type,
      carouselItems[] {
        text,
        imageReference->{
          "url": image.asset->url,
          alt
        }
      },
      autoplay
    },
    _type == "module.accordion" => {
      _type,
      groups[] {
        title,
        body
      }
    }
  },
  seo {
    title,
  }
}
`;

const options = { next: { revalidate: 30 } };

type Page = {
  _id: string;
  hero?: HeroData;
  modules?: (
    | CallToActionData
    | CalloutData
    | YoutubeData
    | CarouselData
    | AccordionData
    | FormData
  )[];
  seo?: Seo;
};

export default async function IndexPage() {
  const page = await client.fetch<Page>(PAGE_QUERY, {}, options);

  if (page === undefined) {
    return null;
  }

  return (
    <>
      <h1 className="sr-only">{page.seo?.title}</h1>
      {page.hero && <Hero {...page.hero} />}
      {page.modules?.map((section) => {
        switch (section._type) {
          case "module.callout":
            return <Callout {...section} />;
          case "module.callToAction":
            return <CallToAction {...section} />;
          case "module.youtubeVideo":
            return <YoutubeVideo {...section} />;
          case "module.carousel":
            return <CarouselSection {...section} />;
          case "module.accordion":
            return <AccordionSection {...section} />;
          case "module.form":
            return <FormSection {...section} />;
          default:
            return null;
        }
      })}
    </>
  );
}
