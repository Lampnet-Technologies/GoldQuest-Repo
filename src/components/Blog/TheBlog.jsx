"use client";

import React, { useEffect, useState } from "react";
import { client, urlFor } from "../../lib/sanity";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import Link from "next/link";

const TheBlog = () => {
  const [data, setData] = useState([]); // Stores all blogs
  const [searchTerm, setSearchTerm] = useState(""); // Stores search input
  const [filteredData, setFilteredData] = useState([]); // Stores filtered blogs

  useEffect(() => {
    const getData = async () => {
      const query = `*[_type == "blog"] | order(_createdAt desc){
            title,
            content,
            publishedAt,
            "currentSlug": slug.current,
            "blogImage": blogImage.asset->url 
          }`;

      try {
        const fetchedData = await client.fetch(query);
        setData(fetchedData);
        setFilteredData(fetchedData); // Initially, show all blogs
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  // Filtering function
  const handleSearch = () => {
    const lowerCaseSearch = searchTerm.toLowerCase();

    const filtered = data.filter(
      (blog) =>
        blog.title.toLowerCase().includes(lowerCaseSearch) ||
        blog.content[0].children[0].text.toLowerCase().includes(lowerCaseSearch)
    );

    setFilteredData(filtered);
  };

  return (
    <section className="container mx-auto px-4 py-14">
      <div className="w-10/12 mx-auto">
        {/* 🔹 Search Bar */}
        <div className="flex items-center gap-3 mb-5">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border border-gray-300 rounded-full w-full"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Search
          </button>
        </div>

        <h2 className="font-bold text-3xl text-[#222] py-10">
          Recent Articles
        </h2>
      </div>

      <div className="w-10/12 mx-auto my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredData.length > 0 ? (
          filteredData.map((blog, index) => (
            <Card key={index}>
              <div className="shadow-lg rounded-lg overflow-hidden">
                <Image
                  className="w-full h-56 object-cover object-center"
                  src={urlFor(blog.blogImage).url()}
                  alt={blog.title || "Blog image"}
                  width={500}
                  height={300}
                  objectFit="cover"
                />
                <CardContent className="p-4">
                  <div className="text-sm font-semibold text-gray-400">
                    {new Date(blog.publishedAt)
                      .toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })
                      .replace(" ", " - ")}
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-300">
                    {blog.title}
                  </h2>
                  <p className="line-clamp-3 text-justify mt-2 text-gray-600 dark:text-gray-300">
                    {blog.content[0].children[0].text}
                  </p>
                  <Link
                    href={`/single-blog-page/${blog.currentSlug}`}
                    className="flex items-center mt-4 text-blue-700 hover:underline"
                  >
                    Read more
                    <svg
                      className="h-5 w-5 ml-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </Link>
                </CardContent>
              </div>
            </Card>
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500">No results found</p>
        )}
      </div>
    </section>
  );
};

export default TheBlog;
