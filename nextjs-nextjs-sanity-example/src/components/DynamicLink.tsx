import React from "react";
import { Link as LinkData } from "@/types/Link"; // Adjust the path to your types file
import Link from "next/link";

type LinkProps = LinkData & { className: string };

export const DynamicLink: React.FC<LinkProps> = ({ className, ...link }) => {
  if (link._type === "linkInternal") {
    // Internal link logic
    const slug = link.reference?.slug?.current || "/";
    return (
      <Link className={className} href={`/${slug}`}>
        {link.title}
      </Link>
    );
  }

  if (link._type === "linkExternal") {
    // External link logic
    return (
      <Link
        href={""}
        target={link.newWindow ? "_blank" : "_self"}
        rel={link.newWindow ? "noopener noreferrer" : undefined}
        className={className}
      >
        {link.title}
      </Link>
    );
  }

  return null;
};
