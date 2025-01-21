import { Link } from "./Link";
import { MediaReference } from "./MediaReference";

export type CallToAction = {
  _type: "module.callToAction";
  layout: "left" | "right";
  title: string;
  body?: string;
  link: Link;
  imageReference?: MediaReference;
};
