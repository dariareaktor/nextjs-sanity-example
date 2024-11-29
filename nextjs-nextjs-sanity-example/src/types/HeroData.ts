import { MediaReference } from "./MediaReference";

export type HeroData = {
  _type: "heroSection";
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
