import { LinkInternal } from "./Link";

export type NavigationGroup = {
  _type: "navigationGroup";
  title: string;
  links: LinkInternal[];
};

export type NavigationItem = LinkInternal | NavigationGroup;

export type Navigation = {
  navigation: NavigationItem[];
};