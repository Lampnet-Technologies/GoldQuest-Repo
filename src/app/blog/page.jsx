import React from "react";
import HeroSection from "../../components/HeroSection";
import BlogList from "../../components/BlogList"; 
import { client } from "../../lib/sanity";

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

      {/* Client-side filter */}
      <BlogList posts={posts} />
    </main>
  );
};

export default Page;
