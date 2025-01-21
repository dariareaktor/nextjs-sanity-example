import { FC } from "react";
import { CallToAction as CallToActionData } from "@/types/CallToAction";
import { Button } from "./ui/button";
import Link from "next/link";

type CallToActionProps = CallToActionData;

export const CallToAction: FC<CallToActionProps> = ({
  layout,
  title,
  body,
  link,
  imageReference,
}) => {
  const imageUrl = imageReference?.image?.asset?.url;
  const imageAlt = imageReference?.image?.alt || "";
  const linkHref =
    link.type === "internal" ? link.internal.slug || "/" : link.external.url;
  const linkTitle =
    link.type === "internal" ? link.internal.title : link.external.title;

  return (
    <section>
      <div
        className={`w-full mx-auto max-w-5xl py-16 flex gap-8 ${
          layout === "right" ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div className="flex flex-col gap-4 justify-center">
          <h2 className="text-2xl font-semibold">{title}</h2>
          {body && <p className="text-base font-light">{body}</p>}
          <Button
            asChild
            className="py-4 px-8 w-fit text-l font-semibold text-white bg-gray-600 rounded"
          >
            <Link href={linkHref}>{linkTitle}</Link>
          </Button>
        </div>
        {imageUrl && <img className="max-w-md" src={imageUrl} alt={imageAlt} />}
      </div>
    </section>
  );
};
