import { BlogPost } from "@/types/BlogPost";
import { Product } from "@/types/Product";
import { FC } from "react";

type CardsGridProps = {
  heading: string;
  subheading?: string;
  maxColumns?: number;
  cardsSource: "product" | "blogPost";
  productItems?: Product[];
  blogPostItems?: BlogPost[];
};

export const CardsGrid: FC<CardsGridProps> = ({
  heading,
  subheading,
  maxColumns,
  cardsSource,
  productItems,
  blogPostItems,
}) => {
  const items = cardsSource === "product" ? productItems : blogPostItems;

  return (
    <section className="container mx-auto max-w-3xl p-8">
      <header className="mb-4">
        <h2 className="text-2xl font-bold">{heading}</h2>
        {subheading && <p className="text-lg text-gray-600">{subheading}</p>}
      </header>
      <div
        className={`grid gap-4`}
        style={{
          gridTemplateColumns: `repeat(${maxColumns || 1}, minmax(0, 1fr))`,
        }}
      >
        {items?.map((item) => (
          <div key={item.title} className="card bg-white shadow-md p-4 rounded">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            {item.description && (
              <p className="text-sm text-gray-500">{item.description}</p>
            )}
            {cardsSource === "product" && (item as Product).image && (
              <img
                src={(item as Product).image?.image.asset.url}
                alt={(item as Product).image?.image.alt || ""}
                className="w-full h-auto mt-2 rounded"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
