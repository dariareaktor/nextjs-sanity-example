import { client } from "@/sanity/client";
import Link from "next/link";

export default async function BlogListPage() {
  const posts = await client.fetch(
    `
    *[_type == "post"] | order(publishDate desc) {
      title,
      slug,
      publishDate
    }
    `
  );

  return (
    <div className="max-w-5xl mx-auto my-12">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug.current}>
            <Link
              href={`/blog/${post.slug.current}`}
              className="text-lg font-semibold text-emerald-600 hover:underline"
            >
              {post.title}
            </Link>
            <p className="text-sm text-gray-500">
              Published on {new Date(post.publishDate).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
