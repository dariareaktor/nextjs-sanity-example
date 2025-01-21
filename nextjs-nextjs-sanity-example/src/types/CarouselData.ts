export type CarouselData = {
  _type: "module.carousel";
  autoplay: boolean;
  carouselItems: {
    text: string;
    imageReference: {
      url: string;
      alt: string;
    };
  }[];
};
