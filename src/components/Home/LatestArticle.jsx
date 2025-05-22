import Image from "next/image";
import React from "react";

const data = [
  {
    id: 1,
    image: "/pexels-photo-3894378.jpeg",
    title: "trainings",
    subText:
      "We offer trainings in Digital marketing, E-commerce, Leadership, Team management, Financial illiteracy and Entrepreneurship.",
  },
  {
    id: 2,
    image: "/pexels-photo-3894383.jpeg",
    title: "coaching",
    subText:
      "We provide personalized leadership development and mentorship for aspiring entrepreneurs. ",
  },
  {
    id: 3,
    image: "/courses.png",
    title: "courses",
    subText:
      "We have courses that suits your needs whether you are a new or aspiring entrepreneur or an established one.",
  },
  {
    id: 4,
    image: "/two-business-partner.png",
    title: "consultation",
    subText:
      "We provide business growth strategies, market entry strategies for startups, team management, and financial planning assistance",
  },
];

const LatestArticle = () => {
  return (
    <section className="container h-full py-16  mx-auto">
      <div className="w-10/12 mx-auto ">
        <div className="text-center space-y-5">
          <h2 className="font-bold text-3xl">
          Our Latest Articles
          </h2>
          <p className="w-full md:w-8/12 mx-auto text-base font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Grid Container */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {data.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col items-center text-center p-6 rounded-lg shadow-lg bg-white 
              transition-transform duration-300 ease-in-out hover:scale-105"
              >
                {/* Image */}
                <div className="w-full h-full md:w-64 md:h-64 overflow-hidden rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={256}
                    height={256}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>

                {/* Title & Text */}
                <h3 className="font-bold text-lg font-radley uppercase mt-4">
                  {item.title}
                </h3>
                <p className="text-sm text-center font-radley mt-2">
                  {item.subText}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestArticle;
