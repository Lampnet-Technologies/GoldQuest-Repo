import React from "react";
import { client } from "../../../lib/sanity";
import { PortableText } from "next-sanity";

async function getData(slug) {
  const query = `*[_type == "blog" && slug.current == "${slug}"] {
    "currentSlug": slug.current,
    title,
    content,
    publishedAt,
    "blogImage": blogImage.asset->url
  }[0]`;

  const data = await client.fetch(query);
  return data;
}

const Page = async ({ params }) => {
  const data = await getData(params.slug);
  console.log(data);

  if (!data) {
    return <p className="text-center mt-6 text-red-500">Blog post not found</p>;
  }

  return (
    <main className="w-full min-h-screen max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
      <div className="mt-6">
        <h1 className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {data.title}
        </h1>
        <img
          src={data.blogImage}
          alt={data.title}
          priority
          className="w-full max-h-96 object-cover mt-8 object-center rounded-lg"
        />
        <div className="mt-16">
            <PortableText value={data.content}/>
        </div>
      </div>
    </main>
  );
};

export default Page;
