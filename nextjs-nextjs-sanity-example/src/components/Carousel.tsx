"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CarouselData } from "@/types/CarouselData";

const chunkArray = <T,>(array: T[], chunkSize: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

type CarouselSectionProps = CarouselData;

export const CarouselSection: React.FC<CarouselSectionProps> = ({
  autoplay,
  carouselItems,
}) => {
  const groupedItems = chunkArray(carouselItems, 3);

  return (
    <section className="w-full mx-auto max-w-5xl py-8">
      <Carousel
        opts={{ loop: autoplay }}
        className="relative max-w-5xl mx-auto"
      >
        <CarouselPrevious />
        <CarouselContent>
          {groupedItems.map((group, groupIndex) => (
            <CarouselItem key={groupIndex} className="p-4">
              <div className="flex gap-4">
                {group.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex-1 rounded-md overflow-hidden shadow-lg"
                  >
                    <img
                      src={item.imageReference.url}
                      alt={item.imageReference.alt}
                      className="w-full h-64 object-cover"
                    />
                    <p className="p-4 text-center text-sm">{item.text}</p>
                  </div>
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    </section>
  );
};
