"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/client";
import { Navigation } from "./Navigation";

type Link = { title: string; slug: string };
type NavigationItem = Link | { title: string; links: Link[] };
type LayoutData = {
  navigation: {
    headerNavigation: NavigationItem[];
    footerNavigation: { title: string; links: Link[] }[];
  };
  banner?: { title: string };
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<LayoutData | null>(null);

  useEffect(() => {
    async function fetchData() {
      const navigation = await client.fetch(`
        *[_type == "navigation"][0]{
            headerNavigation[] {
                _type == "linkInternal" => {title, "slug": reference->slug.current},
                _type == "navigationGroup" => {title, links[] {title, "slug": reference->slug.current}}
            },
            footerNavigation[] {
                _type == "navigationGroup" => {title, links[] {title, "slug": reference->slug.current}}
            }
        }
      `);

      const banner = await client.fetch(
        `*[_type == "banner" && isVisible == true][0]`
      );

      setData({ navigation, banner });
    }

    fetchData();
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Banner */}
      {data.banner && (
        <div className="py-8 bg-yellow-300 text-black text-center">
          <div className="w-full mx-auto max-w-5xl ">{data.banner.title}</div>
        </div>
      )}
      {/* Header */}
      <header className="w-full mx-auto max-w-5xl py-4">
        {data.navigation.headerNavigation && (
          <Navigation navigationItems={data.navigation.headerNavigation} />
        )}
      </header>
      {/* Main Content */}
      <main>{children}</main>
      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="w-full mx-auto max-w-5xl py-4">
          {data.navigation.footerNavigation && (
            <ul className="flex flex-wrap gap-4">
              {data.navigation.footerNavigation.map((item, index) => (
                <li key={index} className="flex flex-col">
                  <strong className="text-lg font-medium">{item.title}</strong>
                  <ul className="mt-2 space-y-1">
                    {item.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={`/${link.slug || ""}`}
                          className="text-gray-400 hover:underline"
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
          <p className="mt-4 text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
