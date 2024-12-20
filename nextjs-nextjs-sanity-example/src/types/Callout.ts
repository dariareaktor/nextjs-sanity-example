import { Link } from "./Link";

export type Callout = {
  _type: "module.callout";
  text: string;
  links?: Link[];
};
