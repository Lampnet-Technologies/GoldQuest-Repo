import React from "react";

const data = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dn4hkronr/image/upload/v1749895758/training_eulzjf.png",
    title: "trainings",
    subText:
      "We offer trainings in Digital marketing, E-commerce, Leadership, Team management, Financial illiteracy and Entrepreneurship. ",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dn4hkronr/image/upload/v1749895757/coaching_ddwigm.png",
    title: "coaching",
    subText:
      "We provide personalized leadership development and mentorship for aspiring entrepreneurs. ",
  },
  // {
  //   id: 3,
  //   image: "/courses.png",
  //   title: "courses",
  //   subText:
  //     "We have courses that suits your needs whether you are a new or aspiring entrepreneur or an established one.",
  // },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dn4hkronr/image/upload/v1749895757/black_people_banner_image_for_digital_marketing_training_website_dhs28g.png",
    title: "consultation",
    subText:
      "We provide business growth strategies, market entry strategies for startups, team management, and financial planning assistance",
  },
];

const GetHelp = () => {
  return (
    <section className="container h-full py-16  mx-auto">
      <div className="w-10/12 mx-auto ">
        <div className="text-center space-y-5">
          <h2 className="font-bold text-3xl">What We Offer</h2>
          <p className="w-full md:w-8/12 mx-auto text-base font-normal">
            Scale smarter with GoalQuest Consult’s expert consulting where
            data-driven strategies meet real world execution.
          </p>

          {/* Grid Container */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col items-center text-center p-6 rounded-lg shadow-lg bg-white 
              transition-transform duration-300 ease-in-out hover:scale-105"
              >
                {/* Image */}
                <div className="w-full h-full md:h-64 overflow-hidden rounded-lg">
                  <img
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

export default GetHelp;
