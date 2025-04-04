import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const WhoWeAre = () => {
  return (
    <section className="container h-full pt-10 mx-auto">
      <div className="w-11/12 mx-auto  items-center justify-between">
        {/* Upper part */}
        <div className="space-y-3 flex flex-col items-center justify-center text-center w-full md:w-8/12 mx-auto">
          <div>
            <Button className="bg-[#dbad52] shadow-md uppercase  font-medium hover:transition-all hover:bg-[#f7c769] ">
              Who we are
            </Button>
          </div>
          <p className="flex flex-col text-base font-normal space-y-3 ">
            Goal Quest Academy is a premier business training and management
            consulting firm committed to empowering the next generation of
            leaders and entrepreneurs. Established in 2021 and headquartered in
            Enugu, Nigeria, we are dedicated to fostering innovation,
            leadership, and entrepreneurship through world-class training,
            coaching, and consulting services.
          </p>
        </div>

        {/* Down Part */}
        <div className="container mx-auto flex flex-col md:flex-row  items-center justify-center py-16">
          <div className="w-full md:w-1/2  ">
            <Image
              src="/out.png"
              alt="image1.png"
              width={400}
              height={400}
              className="mx-auto"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col space-y-5 mt-5 md:mt-0 px-2 md:px-0 ">
            <h2 className=" font-bold text-3xl capitalize md:text-start text-center">
              our story
            </h2>
            <p className="flex flex-col text-base font-normal space-y-3 md:text-start text-center">
              <span>
                From a modest beginning as a startup with a bold vision, Goal
                Quest Academy has grown into a leading business training and
                management consulting firm in Nigeria. Our journey has been
                marked by a relentless commitment to empowering entrepreneurs
                and business leaders through high-quality training, coaching,
                and consulting services.
              </span>
              <span>
                Our dedication to excellence, innovation, and a deep
                understanding of our clients' needs has driven us to become a
                trusted partner for individuals and businesses seeking to thrive
                in a dynamic and competitive environment. As we continue to
                evolve, our focus remains on making professional training and
                certifications accessible to all, fostering a generation of
                business leaders who will drive economic growth and
                transformation across Africa. promoting a generation of business
                leaders equipped to drive economic growth.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
