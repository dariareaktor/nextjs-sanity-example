import { MediaReference } from "@/types/MediaReference";
import { FC } from "react";

type HeroProps = {
  heading: string;
  subheading?: string;
  callToAction?: {
    callToActionText: string;
    callToActionLink: string;
  };
  image?: {
    imageReference?: MediaReference;
    imagePosition?: "background" | "left" | "right";
  };
  backgroundColor?: "transparent" | "contrast";
};

export const Hero: FC<HeroProps> = ({
  heading,
  subheading,
  callToAction,
  image,
  backgroundColor,
}) => {
  const imageUrl = image?.imageReference?.image?.asset?.url;
  const imageAlt = image?.imageReference?.image?.alt || "";
  const imagePosition = image?.imagePosition || "background";

  return (
    <section
      className={`py-16 px-8 ${
        backgroundColor === "contrast" ? "bg-gray-900 text-white" : ""
      }`}
      style={
        imagePosition === "background" && imageUrl
          ? { backgroundImage: `url(${imageUrl})` }
          : {}
      }
    >
      <div className="container flex gap-8">
        {imagePosition === "left" && imageUrl && (
          <img src={imageUrl} alt={imageAlt} className="hero-image max-w-md" />
        )}
        <div className="flex flex-col gap-4 justify-center">
          <h2 className="text-4xl font-bold">{heading}</h2>
          {subheading && <p className="text-lg mt-4">{subheading}</p>}
          {callToAction?.callToActionText && callToAction?.callToActionLink && (
            <a
              href={callToAction.callToActionLink}
              className="mt-8 inline-block bg-blue-500 text-white px-6 py-3 rounded shadow"
            >
              {callToAction.callToActionText}
            </a>
          )}
        </div>
        {imagePosition === "right" && imageUrl && (
          <img src={imageUrl} alt={imageAlt} className="hero-image max-w-md" />
        )}
      </div>
    </section>
  );
};
