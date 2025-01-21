import { notFound } from "next/navigation";
import { client } from "@/sanity/client";
import { AccordionSection } from "@/components/AccordionSection";
import { YoutubeVideo } from "@/components/YoutubeVideo";

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await client.fetch(
    `
    *[_type == "post" && slug.current == $slug][0]{
      title,
      publishDate,
      author,
      body
    }
    `,
    { slug: params.slug }
  );

  if (!data) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto my-12">
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      <p className="text-sm text-gray-600">
        By {data.author} on {new Date(data.publishDate).toLocaleDateString()}
      </p>
      <article className="prose mt-8">
        {data.body.map((item) => {
          switch (item._type) {
            case "block":
              return <span>{item.children[0].text}</span>;
            case "module.youtubeVideo":
              return <YoutubeVideo {...item} />;
            case "module.accordion":
              return <AccordionSection {...item} />;
            default:
              return null;
          }
        })}
      </article>
    </div>
  );
}
