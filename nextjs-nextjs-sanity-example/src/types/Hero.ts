import { Link } from "./Link";
import { MediaReference } from "./MediaReference";

export type Hero = {
  heading: string;
  subheading?: string;
  link: Link;
  image: {
    imageReference: MediaReference;
    imagePosition?: "left" | "right";
  };
  backgroundColor: "light" | "dark";
};
