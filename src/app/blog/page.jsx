import React from "react";
import HeroSection from "../../components/HeroSection";
import Link from "next/link";
import Image from "next/image";
import { client, urlFor } from "../../lib/sanity";
import { PortableText } from "@portabletext/react";

// Add this function t
export async function generateStaticParams() {
  const query = `*[_type == "blog"]{ "slug": slug.current }`;
  const posts = await client.fetch(query);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const Page = async () => {
  const query = `*[_type == "blog"]{
    title,
    slug,
    mainImage,
    body,
    _createdAt
  }`;
  const posts = await client.fetch(query);

  return (
    <main>
      <section>
        <HeroSection
          title="Stay up-to-date with our latest contents"
          subtitle=""
          ctaText=""
          ctaLink="/contact"
          backgroundImage="/hero-bg.png"
        >
          <p className="text-2xl text-white">Blog</p>
        </HeroSection>
      </section>

      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts?.map((post) => (
            <div
              key={post.slug.current}
              className="border p-4 rounded-md shadow-sm transition duration-300 hover:shadow-lg hover:border-blue-500 group"
            >
              {post.mainImage && (
                <Image
                  src={urlFor(post.mainImage).width(600).url()}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="rounded-md mb-4 object-cover w-[100%] h-[300px]"
                />
              )}

              <h2 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition">
                {post.title}
              </h2>

              <p className="text-sm text-gray-500 mb-2">
                {new Date(post._createdAt).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </p>

              <div className="line-clamp-3 text-gray-700 text-sm mb-4">
                <PortableText value={post.body.slice(0, 1)} />
              </div>

              <Link
                href={`/blog/${post.slug.current}`}
                className="text-blue-600 text-sm font-medium hover:underline"
              >
                Read more →
              </Link>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Page;
