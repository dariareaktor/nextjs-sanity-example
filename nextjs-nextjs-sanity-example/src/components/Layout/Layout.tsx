"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/client";
import { Navigation } from "./Navigation";

type Link = { title: string; slug: string };
type NavigationItem = Link | { title: string; links: Link[] };
type LayoutData = {
  navigation: {
    headerNavigation: NavigationItem[];
    footerNavigation: NavigationItem[];
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
                _type == "linkInternal" => {title, "slug": reference->slug.current},
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
  console.log(data);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Banner */}
      {data.banner && (
        <div className="bg-yellow-300 text-black text-center py-2">
          {data.banner.title}
        </div>
      )}
      {/* Header */}
      <header>
        {data.navigation.headerNavigation && (
          <Navigation navigationItems={data.navigation.headerNavigation} />
        )}
      </header>
      {/* Main Content */}
      <main>{children}</main>
      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        {data.navigation.footerNavigation && (
          <Navigation navigationItems={data.navigation.footerNavigation} />
        )}
      </footer>
    </div>
  );
}
