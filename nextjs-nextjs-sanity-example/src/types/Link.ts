export type LinkInternal = {
  _type: "linkInternal";
  title: string;
  reference: {
    _type: "home" | "page";
    slug?: { current: string };
  };
};

export type LinkExternal = {
  _type: "linkExternal";
  title: string;
  href: string;
  newWindow?: boolean;
};

export type Link = LinkInternal | LinkExternal;
