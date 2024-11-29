import { MediaReference } from "./MediaReference";

export type Product = {
  title: string;
  description?: string;
  image?: MediaReference;
};
