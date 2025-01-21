import { FC } from "react";
import { Callout as CalloutData } from "@/types/Callout";
import { Button } from "./ui/button";
import Link from "next/link";

type CalloutProps = CalloutData;

export const Callout: FC<CalloutProps> = ({ text, link }) => {
  const linkHref =
    link.type === "internal" ? link.internal.slug || "/" : link.external.url;
  const linkTitle =
    link.type === "internal" ? link.internal.title : link.external.title;

  return (
    <section className="bg-gray-800">
      <div className="w-full mx-auto max-w-5xl py-8 flex gap-8 justify-between items-center">
        <p className="text-base font-light text-white">{text}</p>
        <Button
          asChild
          className="py-4 px-8 w-fit text-l font-semibold text-white bg-gray-600 rounded"
        >
          <Link href={linkHref}>{linkTitle}</Link>
        </Button>
      </div>
    </section>
  );
};
