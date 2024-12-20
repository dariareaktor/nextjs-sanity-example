import { client } from "@/sanity/client";
import { Hero as HeroData } from "@/types/Hero";
import { CallToAction as CallToActionData } from "@/types/CallToAction";
import { Callout as CalloutData } from "@/types/Callout";
import { Seo } from "@/types/HomeSeo";
import { Hero } from "@/components/Hero";
import { Callout } from "@/components/Callout";
import { CallToAction } from "@/components/CallToAction";

const PAGE_QUERY = `*[_type == "home"][0]{
  _id,
  hero {
    heading,
    subheading,
    link {
      title,
      reference->{
        _type,
        "slug": coalesce(slug.current, "/") // Resolve slug for internal links
      }
    },
    image {
      imageReference->{
        image {
          asset->{
            url
          }
        },
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
      links[] {
        title,
        _type,
        "href": coalesce(
          reference->slug.current, // Internal links
          externalLink // External links
        )
      }
    },
    _type == "module.callToAction" => {
      _type,
      layout,
      title,
      body,
      links[] {
        title,
        _type,
        "href": coalesce(
          reference->slug.current, // Internal links
          externalLink // External links
        )
      },
      imageReference->{
        image {
          asset->{
            url
          }
        },
        alt
      }
    },
    _type == "reference" => {
      _type,
      imageReference->{
        image {
          asset->{
            url
          }
        },
        alt
      }
    }
  },
  seo {
    title,
    description,
    image {
      asset->{
        url
      }
    }
  }
}`;

const options = { next: { revalidate: 30 } };

type Page = {
  _id: string;
  hero?: HeroData;
  modules?: (CallToActionData | CalloutData)[];
  seo?: Seo;
};

export default async function IndexPage() {
  const page = await client.fetch<Page>(PAGE_QUERY, {}, options);

  if (page === undefined) {
    return null;
  }

  return (
    <main>
      <h1 className="sr-only">{page.seo?.title}</h1>
      {page.hero && <Hero {...page.hero} />}
      {page.modules?.map((section) => {
        switch (section._type) {
          case "module.callout":
            return <Callout {...section} />;
          case "module.callToAction":
            return <CallToAction {...section} />;
          default:
            return null;
        }
      })}
    </main>
  );
}
