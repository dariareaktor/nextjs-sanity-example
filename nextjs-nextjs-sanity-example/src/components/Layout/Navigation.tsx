"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

type Link = { title: string; slug: string };
type NavigationItem = Link | { title: string; links: Link[] };

function isGroup(
  item: NavigationItem
): item is { title: string; links: Link[] } {
  return "links" in item;
}

type NavigationProps = {
  navigationItems: NavigationItem[];
};

export const Navigation: React.FC<NavigationProps> = ({ navigationItems }) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href={"/"}>Logo</Link>
        </NavigationMenuItem>
        {navigationItems.map((item) => {
          if (isGroup(item)) {
            return <NavigationGroupItem key={item.title} item={item} />;
          }
          return (
            <NavigationMenuItem key={item.title}>
              <Link href={item.slug || "/"} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          );
        })}
        <NavigationMenuItem>
          <Link href={"/blog"}>Blog</Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const NavigationGroupItem: React.FC<{
  item: { title: string; links: Link[] };
}> = ({ item }) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul>
          {item.links.map((link) => (
            <li key={link.slug}>
              <Link href={link.slug} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {link.title}
                </NavigationMenuLink>
              </Link>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};
