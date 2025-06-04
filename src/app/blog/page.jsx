import React from "react";
import HeroSection from "../../components/HeroSection";
import Link from "next/link";
import Image from "next/image";
import { client, urlFor } from "../../lib/sanity";
import { PortableText } from "@portabletext/react";

const Page = async () => {
  // Fetch data directly inside component (async server component)
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
        <ul className="space-y-8">
          {posts?.map((post) => (
            <li key={post.slug.current} className="border p-4 rounded-md shadow-sm">
              {post.mainImage && (
                <Image
                  src={urlFor(post.mainImage).width(600).url()}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="rounded-md mb-4 object-cover"
                />
              )}
              <Link href={`/blog/${post.slug.current}`}>
                <h2 className="text-2xl font-semibold text-blue-600 hover:underline">
                  {post.title}
                </h2>
              </Link>
              <p className="text-sm text-gray-500 mb-2">
                {new Date(post._createdAt).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </p>
              <div className="line-clamp-3 text-gray-700 text-sm">
                <PortableText value={post.body.slice(0, 1)} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Page;
