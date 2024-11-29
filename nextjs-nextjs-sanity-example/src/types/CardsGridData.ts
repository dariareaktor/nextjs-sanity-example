import { BlogPost } from "./BlogPost";
import { Product } from "./Product";

export type CardsGridData = {
  _type: "cardsGridSection";
  heading: string;
  subheading?: string;
  maxColumns?: number;
  cardsSource: "product" | "blogPost";
  productItems?: Product[];
  blogPostItems?: BlogPost[];
};
