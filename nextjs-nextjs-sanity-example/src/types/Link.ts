export type Link = {
  type: "internal" | "external";
  internal: { title: string; slug: string };
  external: { title: string; url: string };
};
