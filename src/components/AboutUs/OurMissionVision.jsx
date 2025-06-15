import React from "react";
import Image from "next/image";

const OurMissionVision = () => {
  return (
    <section className="container  h-full mx-auto">
      <div className="w-11/12   mx-auto flex flex-col md:flex-row  items-center justify-center py-16">
        <div className="w-full md:w-1/2 flex flex-col space-y-5 items-center justify-center md:items-start md:justify-start mb-4 md:mb-0">
          <div className="  w-full md:w-9/12 space-y-5 ">
            <h2 className=" font-bold text-3xl capitalize text-center md:text-start">our mission</h2>
            <p className="  font-normal space-y-3 font-sans text-[#444] text-lg  text-center md:text-start">
              To provide affordable, high-impact training and consulting customized for entrepreneurs, business owners, and leaders at every level
            </p>
          </div>

          <div className=" w-full md:w-7/12  flex flex-col space-y-5 items-center justify-center md:items-start md:justify-start">
            <h2 className="font-bold text-3xl capitalize text-center md:text-start">our vission</h2>
            <p className="flex flex-col font-normal space-y-3 font-sans text-[#444] text-lg text-center md:text-start">
              To become Nigeria’s #1 business training institute, recognized globally for fostering innovation, leadership, and entrepreneurship.
            </p>
          </div>
        </div>

        <div className="">
          <Image
            src="/out.png"
            alt="image1.png"
            width={400}
            height={400}
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default OurMissionVision;
