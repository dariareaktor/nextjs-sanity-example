import { FC } from "react";
import { Callout as CalloutData } from "@/types/Callout";
import { DynamicLink } from "./DynamicLink";

type CalloutProps = CalloutData;

export const Callout: FC<CalloutProps> = ({ text, links }) => {
  return (
    <section className="bg-emerald-800">
      <div className="mx-auto max-w-5xl p-8 flex gap-8 justify-between">
        <p className="text-base font-light text-white">{text}</p>
        {links && links?.length > 0 && (
          <div>
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
    </section>
  );
};
