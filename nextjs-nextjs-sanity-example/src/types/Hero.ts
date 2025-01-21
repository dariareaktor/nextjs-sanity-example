import { Link } from "./Link";

export type Hero = {
  heading: string;
  subheading?: string;
  link: Link;
  image: {
    imageReference: {
      url: string;
      alt: string;
    };
    imagePosition?: "left" | "right";
  };
  backgroundColor: "light" | "dark";
};
