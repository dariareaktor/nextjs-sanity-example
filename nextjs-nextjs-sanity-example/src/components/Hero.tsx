import { Hero as HeroData } from "@/types/Hero";
import { FC } from "react";
import { DynamicLink } from "./DynamicLink";

type HeroProps = HeroData;

export const Hero: FC<HeroProps> = ({
  heading,
  subheading,
  link,
  image,
  backgroundColor,
}) => {
  const imageUrl = image?.imageReference?.image?.asset?.url;
  const imageAlt = image?.imageReference?.image?.alt || "";

  return (
    <section
      className={backgroundColor === "dark" ? "bg-emerald-950 text-white" : ""}
    >
      <div
        className={`mx-auto max-w-5xl py-16 px-8 flex gap-8 ${
          image.imagePosition === "left" ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div className="flex flex-col gap-4 justify-center">
          <h2 className="text-2xl font-semibold">{heading}</h2>
          {subheading && <p className="text-base font-light">{subheading}</p>}
          <DynamicLink
            {...link}
            className="py-4 px-8 w-fit text-l font-semibold text-white bg-emerald-600 rounded"
          />
        </div>
        <img className="max-w-md" src={imageUrl} alt={imageAlt} />
      </div>
    </section>
  );
};
