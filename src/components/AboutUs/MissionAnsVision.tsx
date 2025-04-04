import React from "react";
import { FaGlobe } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";

const MissionAnsVision = () => {
  return (
    <section className="relative w-full h-full py-16 font-playfair bg-[#dbad52] text-white clip-wave">
      {/* Content Section */}
      <div className="w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between py-14 gap-10">
        {/* Mission */}
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <FaGlobe className="text-5xl" />
          <h2 className="text-white font-bold text-3xl capitalize">
            Our Mission
          </h2>
          <p className="font-radley text-base font-normal">
            To design strategies that promote sustainable businesses globally.
          </p>
        </div>

        {/* Vision */}
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <FaLightbulb className="text-5xl" />
          <h2 className="text-white font-bold text-3xl capitalize">
            Our Vision
          </h2>
          <p className="font-radley text-base font-normal">
            To create innovative solutions for a better and sustainable future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionAnsVision;
