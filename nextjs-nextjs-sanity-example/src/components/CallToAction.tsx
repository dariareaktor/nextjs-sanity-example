import { FC } from "react";
import { CallToAction as CallToActionData } from "@/types/CallToAction";
import { DynamicLink } from "./DynamicLink";

type CallToActionProps = CallToActionData;

export const CallToAction: FC<CallToActionProps> = ({
  layout,
  title,
  body,
  links,
  imageReference,
}) => {
  const imageUrl = imageReference?.image?.asset?.url;
  const imageAlt = imageReference?.image?.alt || "";
  return (
    <section>
      <div
        className={`mx-auto max-w-5xl py-16 px-8 flex gap-8 ${
          layout === "right" ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div className="flex flex-col gap-4 justify-center">
          <h2 className="text-2xl font-semibold">{title}</h2>
          {body && <p className="text-base font-light">{body}</p>}
          {links && links?.length > 0 && (
            <div className="flex">
              {links.map((link) => (
                <DynamicLink
                  key={link.title}
                  {...link}
                  className="py-4 px-8 w-fit text-sm text-white bg-emerald-600 rounded"
                />
              ))}
            </div>
          )}
        </div>
        <img className="max-w-md" src={imageUrl} alt={imageAlt} />
      </div>
    </section>
  );
};
