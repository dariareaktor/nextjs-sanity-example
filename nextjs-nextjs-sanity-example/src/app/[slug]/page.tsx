// import imageUrlBuilder from "@sanity/image-url";
// import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";

const PAGE_QUERY = `*[_type == "page" && slug.current == $slug][0]{ _id, title, slug, pageBuilder }`;

// const { projectId, dataset } = client.config();
// const urlFor = (source: SanityImageSource) => {
//   return projectId && dataset
//     ? imageUrlBuilder({ projectId, dataset }).image(source)
//     : null;
// };

const options = { next: { revalidate: 30 } };

export default async function Page({ params }: { params: { slug: string } }) {
  const page = await client.fetch<SanityDocument>(PAGE_QUERY, params, options);
  // const postImageUrl = post.image ? urlFor(post.image)?.url() : null;

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <h1 className="text-4xl font-bold mb-8">{page.title}</h1>
    </main>
  );
}
