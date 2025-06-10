import React from "react";
import { client, urlFor } from "../../../lib/sanity";
import { PortableText } from "@portabletext/react";

export async function generateStaticParams() {
  const query = `*[_type == "blog"]{ "slug": slug.current }`;
  const posts = await client.fetch(query);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

async function getData(slug) {
  const query = `*[_type == "blog" && slug.current == $slug][0] {
    title,
    body,
    publishedAt,
    mainImage
  }`;

  const data = await client.fetch(query, { slug });
  return data;
}

const Page = async ({ params }) => {
  const data = await getData(params.slug);

  if (!data) {
    return <p className="text-center mt-6 text-red-500">Blog post not found</p>;
  }

  return (
    <main className="w-full min-h-screen max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
      <div className="mt-6">
        <h1 className="mt-2 block text-3xl leading-8 font-bold tracking-tight sm:text-4xl">
          {data.title}
        </h1>

        {data.mainImage && (
          <img
            src={urlFor(data.mainImage).width(1200).url()}
            alt={data.title}
            className="w-full max-h-96 object-cover mt-8 object-center rounded-lg"
          />
        )}

        {data.publishedAt && (
          <p className="mt-4 text-center text-gray-500 text-sm">
            Published on{" "}
            {new Date(data.publishedAt).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </p>
        )}

        <div className="mt-16 mb-10 prose prose-lg dark:prose-invert max-w-none">
          <PortableText value={data.body} />
        </div>
      </div>
    </main>
  );
};

export default Page;
