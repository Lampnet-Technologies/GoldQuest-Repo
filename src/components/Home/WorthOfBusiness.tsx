import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const WorthOfBusiness = () => {
  const rectangleStyle: React.CSSProperties = {
    position: "relative",
    width: "100%",
    height: "70px",
    backgroundColor: "#CF982B",
    clipPath: `polygon(
      0% 20px,   /* Move top-left corner downward */
      50% 0%,    /* Skew on left side */
      50% 0%,    /* Skew on right side */
      100% 20px, /* Move top-right corner downward */
      100% 100%, /* Bottom-right corner */
      0% 100%    /* Bottom-left corner */
    )`,
  };

  return (
    <section className="container h-full py-16 mx-auto">
      <div className="w-10/12 mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Side (Image & Rectangle) */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          <div className="w-full max-w-[400px]">
            {/* Ensure Rectangle Matches Image Width */}
            {/* style={rectangleStyle} */}
            <div className="w-full"></div>
            <div>
              <img
                src="https://res.cloudinary.com/dn4hkronr/image/upload/v1747933254/Group_6_olsiz2.png"
                alt="worth of business"
                width={400}
                height={400}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Right Side (Text & Buttons) */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex flex-col space-y-5">
          <div>
            <Button className="bg-[#f7c769] shadow-md uppercase font-medium hover:bg-[#e6b85c]">
              Service
            </Button>
          </div>
          <h2 className="font-bold text-3xl capitalize">
            Providing Clarity For Business Growth
          </h2>
          <p className="text-base text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <div>
            <Button className="bg-blue-950 shadow-md font-medium hover:bg-[#f7c769]">
              Read More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorthOfBusiness;
