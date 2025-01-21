"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { PortableText } from "@portabletext/react";

type AccordionSectionProps = {
  groups: {
    title: string;
    body: any; // Replace `any` with the appropriate PortableText type
  }[];
};

export const AccordionSection: React.FC<AccordionSectionProps> = ({
  groups,
}) => {
  return (
    <section className="w-full mx-auto max-w-5xl py-8">
      <Accordion type="single" collapsible>
        {groups.map((group, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-2xl">
              {group.title}
            </AccordionTrigger>
            <AccordionContent>
              <PortableText value={group.body} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
