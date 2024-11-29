import { client } from "@/sanity/client";
import { Hero } from "@/components/Hero/Hero";
import { CardsGrid } from "@/components/CardsGrid/CardsGrid";
import { HeroData } from "@/types/HeroData";
import { CardsGridData } from "@/types/CardsGridData";

const PAGE_QUERY = `
  *[_type == "page" && isHomePage == true]{ 
    _id, 
    title, 
    slug, 
    pageBuilder[]{
      ...,
      _type == "heroSection" => {
        heading,
        subheading,
        callToAction {
          callToActionText,
          callToActionLink
        },
        image {
          imageReference->{
            image {
              asset->{
                url
              },
              alt
            }
          },
          imagePosition
        },
        backgroundColor
      },
      _type == "cardsGridSection" => {
        heading,
        subheading,
        maxColumns,
        cardsSource,
        productItems[]->{
          _id,
          title,
          description,
          image->{
            image {
              asset->{
                url
              },
              alt
            }
          }
        },
        blogPostItems[]->{
          _id,
          title,
          description,
          date
        }
      }
    }
  }
`;

const options = { next: { revalidate: 30 } };

type Page = {
  _id: string;
  title: string;
  slug: string;
  pageBuilder: (HeroData | CardsGridData)[];
};

export default async function IndexPage() {
  const pages = await client.fetch<Page[]>(PAGE_QUERY, {}, options);

  if (pages.length === 0) {
    return null;
  }

  const page = pages[0];

  return (
    <main>
      <div className="container mx-auto max-w-3xl p-8">
        <h1 className="text-4xl font-bold mb-8">{page.title}</h1>
      </div>
      {page.pageBuilder?.map((section, index) => {
        switch (section._type) {
          case "heroSection":
            return (
              <Hero
                key={index}
                heading={section.heading}
                subheading={section.subheading}
                callToAction={section.callToAction}
                image={section.image}
                backgroundColor={section.backgroundColor}
              />
            );
          case "cardsGridSection":
            return (
              <CardsGrid
                key={index}
                heading={section.heading}
                subheading={section.subheading}
                maxColumns={section.maxColumns}
                cardsSource={section.cardsSource}
                productItems={section.productItems}
                blogPostItems={section.blogPostItems}
              />
            );
          default:
            return null;
        }
      })}
    </main>
  );
}
