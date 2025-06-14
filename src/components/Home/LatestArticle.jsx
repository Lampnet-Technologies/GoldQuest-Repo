import { time } from "console";
import Image from "next/image";
import React from "react";

const data = [
  {
    id: 1,
    image: "/pexels-photo-3894378.jpeg",
    date: "15th November, 2024",
    time: "5 min read",
    subText: "Strategy And Growth Solution For Businesses",
  },
  {
    id: 2,
    image: "/pexels-photo-3894383.jpeg",
    date: "15th November, 2024",
    time: "5 min read",
    subText:
      "We provide personalized leadership development and mentorship for aspiring entrepreneurs. ",
  },
  {
    id: 3,
    image: "/courses.png",
    date: "15th November, 2024",
    time: "5 min read",
    subText:
      "We have courses that suits your needs whether you are a new or aspiring entrepreneur or an established one.",
  },
];

const LatestArticle = () => {
  return (
    <section className="container h-full py-16  mx-auto">
      <div className="w-10/12 mx-auto ">
        <div className="text-center mb-3">
          <h2 className="font-bold text-3xl">Our Latest Articles</h2>
          <p className="w-full md:w-8/12 mx-auto text-base font-normal">
            News,learning resource and updates
          </p>

          {/* Grid Container */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
            {data.map((item) => (
              <div
                key={item.id}
                className="group mt-7 p-6 rounded-lg shadow-lg bg-white 
              transition-transform duration-300 ease-in-out hover:scale-105"
              >
                {/* Image */}
                <div className="w-full h-full md:h-64 overflow-hidden rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={256}
                    height={256}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>

                {/* Title & Text */}
                <h3 className=" font-radley mt-4">
                  {item.date}
                </h3>
                <p className="text-sm font-radley mt-2">
                  {item.subText}
                </p>
                <p className="text-sm text-gray-500">{item.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestArticle;
