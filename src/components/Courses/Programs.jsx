import React from "react";
import CourseList from "./CourseList";
export default function Programs() {
  return (
    <div>
      <section className=" mx-auto py-8 w-[80%] md:w-[90%]">
        <h1 className="text-3xl font-bold my-4">Training Programs</h1>
        <p>
          In today's fast-moving business landscape, knowledge isn't just power
          it's your unfair advantage. At GoalQuest Consult, we've redefined
          professional development through our transformational training
          programs that bridge the gap between theory and real-world execution.
          Our carefully curated courses are designed by seasoned practitioners
          who understand what it takes to succeed in African markets. Whether
          you're looking to master digital marketing, strengthen your leadership
          capabilities, or build financial acumen, our hands-on approach ensures
          you gain immediately applicable skills not just textbook concepts.
        </p>
      </section>
      <CourseList />
    </div>
  );
}
