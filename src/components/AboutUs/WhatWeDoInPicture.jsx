import Image from "next/image";
import React from "react";

export default function WhatWeDoInPicture() {
  return (
    <div>
      <section className="w-[80%] mx-auto md:grid grid-cols-2 gap-10 mb-10">
        <div className="mb-11 md:mb-0">
          <h1 className="font-bold text-4xl mb-3">What we do in pictures</h1>
          <ul>
            <li className="flex gap-2 items-center my-2">
              <div className="w-[20px] h-[20px] bg-[#DBAD52]"></div>
              {""} Training
            </li>
            <li className="flex gap-2 items-center my-2">
              <div className="w-[20px] h-[20px] bg-[#DBAD52]"></div>
              {""} Mentorship
            </li>
            <li className="flex gap-2 items-center my-2">
              <div className="w-[20px] h-[20px] bg-[#DBAD52]"></div>
              {""} Coaching
            </li>
          </ul>
        </div>
        <div className="">
          <img
            src="https://res.cloudinary.com/dn4hkronr/image/upload/v1750013112/whatwedo_etcwuo.png"
            alt="image"
            width="400"
            height="400"
          />
        </div>
      </section>
    </div>
  );
}
