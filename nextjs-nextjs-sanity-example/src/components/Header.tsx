import { client } from "@/sanity/client";
import { LinkInternal } from "@/types/Link";
import { Navigation, NavigationGroup } from "@/types/Navigation";
import Link from "next/link";

const NAV_QUERY = `*[_type == "navigation"][0]{
  navigation[] {
    _type == "linkInternal" => {
      _type,
      title,
      reference->{
        _type,
        "slug": coalesce(slug.current, "/")
      }
    },
    _type == "navigationGroup" => {
      _type,
      title,
      links[] {
        _type,
        title,
        reference->{
          _type,
          "slug": coalesce(slug.current, "/")
        }
      }
    }
  }
}`;

const options = { next: { revalidate: 30 } };

export const Header = async () => {
  const navigation = await client.fetch<Navigation>(NAV_QUERY, {}, options);

  if (!navigation) return null;

  return (
    <header className="">
      <nav className="mx-auto max-w-5xl py-16 px-8 flex gap-8 justify-between items-center">
        <ul className="flex gap-6">
          {navigation.navigation.map((item, index) => {
            if (item._type === "linkInternal") {
              const link = item as LinkInternal;
              return (
                <li key={index}>
                  <Link href={``}>{link.title}</Link>
                </li>
              );
            }

            if (item._type === "navigationGroup") {
              const group = item as NavigationGroup;
              return (
                <li key={index} className="group relative">
                  <span>{group.title}</span>
                  <ul className="absolute bg-emerald-800 text-white mt-2 hidden group-hover:block">
                    {group.links.map((link, idx) => (
                      <li key={idx} className="px-4 py-2 hover:bg-emerald-700">
                        <Link href={``} className="whitespace-nowrap">
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }

            return null;
          })}
        </ul>
      </nav>
    </header>
  );
};
