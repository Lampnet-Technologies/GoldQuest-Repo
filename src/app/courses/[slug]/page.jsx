import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import CourseData from "@/components/Courses/CourseData";
import CourseDetailHero from "@/components/Courses/CourseDetailHero";
import AboutCourse from "@/components/Courses/AboutCourse";
import CourseContent from "@/components/Courses/CourseContent";
import Reviews from "@/components/Courses/Reviews";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import CourseData from "@/components/Courses/CourseData";
// ...other imports...

export async function generateStaticParams() {
  // Replace with your actual slug fetching logic
  return CourseData.map(course => ({ slug: course.slug }));
}

export default function CourseDetailPage({ params }) {
  // ...existing code...
}
export default function CourseDetailPage({ params }) {
  const course = CourseData.find((c) => c.slug === params.slug);

  if (!course) {
    return notFound();
  }

  return (
    <div>
      <CourseDetailHero course={course} />
      <div className="w-full mx-auto">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="w-full flex items-center justify-center bg-white rounded-none border-b border-gray-200 h-14">
            <Link
              href="/courses"
              className="flex items-center px-4 text-blue-950 hover:text-yellow-600 text-xl font-bold"
              aria-label="Back to Courses"
            >
              ←
            </Link>
            <TabsTrigger value="about" className="flex-1 text-center">
              About Course
            </TabsTrigger>
            <TabsTrigger value="content" className="flex-1 text-center">
              Course Content
            </TabsTrigger>
            <TabsTrigger value="reviews" className="flex-1 text-center">
              Reviews
            </TabsTrigger>
          </TabsList>

          <TabsContent value="about">
            <AboutCourse course={course} />
          </TabsContent>
          <TabsContent value="content">
            <CourseContent course={course} />
          </TabsContent>
          <TabsContent value="reviews">
            <Reviews course={course} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
// This file is used to render the course detail page based on the slug from the URL.
