'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "../lib/sanity";
import { PortableText } from "@portabletext/react";

const BlogList = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="w-[90%] mt-11 max-w-3xl mx-auto">
        <input
          type="text"
          placeholder="Search article"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full mt-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Recent Articles</h1>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts?.map((post) => (
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
    </>
  );
};

export default BlogList;
