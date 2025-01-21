import { Hero as HeroData } from "@/types/Hero";
import { FC } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

type HeroProps = HeroData;

export const Hero: FC<HeroProps> = ({
  heading,
  subheading,
  link,
  image,
  backgroundColor,
}) => {
  const imageUrl = image?.imageReference?.url;
  const imageAlt = image?.imageReference?.alt || "";

  const linkHref =
    link.type === "internal" ? link.internal.slug : link.external.url;
  const linkTitle =
    link.type === "internal" ? link.internal.title : link.external.title;

  return (
    <section
      className={backgroundColor === "dark" ? "bg-gray-900 text-white" : ""}
    >
      <div
        className={`mx-auto max-w-5xl py-16 px-8 flex gap-8 ${
          image.imagePosition === "left" ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div className="flex flex-col gap-4 justify-center">
          <h2 className="text-2xl font-semibold">{heading}</h2>
          {subheading && <p className="text-base font-light">{subheading}</p>}

          {link && (
            <Button
              asChild
              className="py-4 px-8 w-fit text-l font-semibold text-white bg-gray-600 rounded"
            >
              <Link href={linkHref}>{linkTitle}</Link>
            </Button>
          )}
        </div>
        {imageUrl && <img className="max-w-md" src={imageUrl} alt={imageAlt} />}
      </div>
    </section>
  );
};
