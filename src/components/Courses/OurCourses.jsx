import React from "react";
import { FaStar } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const courses = [
  {
    id: 1,
    image: "/courses.png",
    title: "Digital Marketing",
    rating: 4.8,
    reviews: 200,
  },
  {
    id: 2,
    image: "/courses.png",
    title: "E-Commerce",
    rating: 4.5,
    reviews: 150,
  },
  {
    id: 3,
    image: "/courses.png",
    title: "Leadership",
    rating: 4.7,
    reviews: 180,
  },
  {
    id: 4,
    image: "/courses.png",
    title: "Team Management",
    rating: 4.6,
    reviews: 220,
  },
  {
    id: 5,
    image: "/courses.png",
    title: "Financial Literacy",
    rating: 4.9,
    reviews: 130,
  },
  {
    id: 6,
    image: "/courses.png",
    title: "Enterpreneurship",
    rating: 4.4,
    reviews: 90,
  },
];

export default function OurCourses() {
  return (
    <section className="container mx-auto py-16">
      {/* Section Title */}
      <div className="p-4 md:pd-0 mx-auto text-center md:text-start mb-12 space-y-5">
        <h2 className="text-4xl font-bold text-gray-900">Our Courses</h2>
        <h3 className="text-3xl text-gray-700 mt-2">Training Programs</h3>
        <p className="text-base text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. sunt in culpa
          qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 items-center justify-center  sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl "
          >
            {/* Course Image */}
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-52 object-cover"
            />

            {/* Course Content */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900">
                {course.title}
              </h3>

              {/* Ratings */}
              <div className="flex items-center justify-center gap-1 mt-2 text-yellow-500">
                <FaStar className="text-lg" />
                <span className="text-gray-700 font-medium">
                  {course.rating} ({course.reviews})
                </span>
              </div>

              {/* Learn More Button */}
              <button className="mt-4 px-5 py-2 bg-blue-950 text-white font-medium rounded-md transition duration-300 hover:bg-blue-800">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Courses() {
  let firstFourCourses = courses.slice(0, 4);

  return (
    <section className="container mx-auto py-16">
      {/* Section Title */}
      <div className="text-start mb-12 space-y-5">
        <h2 className="text-4xl font-bold text-gray-900">Courses</h2>

        <p className="text-base text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. sunt in culpa
          qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1    sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {firstFourCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl "
          >
            {/* Course Image */}
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-52 object-cover"
            />

            {/* Course Content */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900">
                {course.title}
              </h3>

              {/* Ratings */}
              <div className="flex items-center justify-center gap-1 mt-2 text-yellow-500">
                <FaStar className="text-lg" />
                <span className="text-gray-700 font-medium">
                  {course.rating} ({course.reviews})
                </span>
              </div>

              {/* Learn More Button */}
              <button className="mt-4 px-5 py-2 bg-blue-950 text-white font-medium rounded-md transition duration-300 hover:bg-blue-800">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CoachingAndMentorship() {
  const backgroundImage = "/bc8c5688ad5dc271b083b50fec4b6c3d.jpeg";
  return (
    <section
      className="w-full h-auto flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
        backgroundSize: "contain", 
        backgroundRepeat: "no-repeat", 
        backgroundPosition: "center", 
        height: "70vh", 
      }}
    >
      <div className="py-20 space-y-5">
        <h3 className="font-bold text-3xl text-[#fafafa]">Coaching & Mentorship</h3>
        <p className="font-normal text-xl font-sans text-[#fafafa] w-8/12">
          We offer personalized leadership development and mentoring for
          aspiring entrepreneurs.{" "}
        </p>
        <div>
          <Button className="bg-blue-950 shadow-md font-medium hover:transition-all hover:bg-[#f7c769]">
            Book Appointment
          </Button>
        </div>
      </div>
    </section>
  );
}
