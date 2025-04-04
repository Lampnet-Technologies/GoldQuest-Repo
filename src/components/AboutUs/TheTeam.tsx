"use client";

import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    image: "/image1.png",
    name: "Ugochi Obilonu",
    role: "Lead Consultant",
  },
  {
    id: 2,
    image: "/image3.png",
    name: "Omotunde Oyebola Funmilayo",
    role: "Head of Legal",
  },
  {
    id: 3,
    image: "/image4.jpeg",
    name: "Chidiman Obilonu",
    role: "Creative Strategist",
  },
];

const TheTeam: React.FC = () => {
  return (
    <section className="container mx-auto py-16">
      {/* Section Title */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold font-playfair">Meet the Team</h2>
      </div>

      {/* Slider (Carousel) */}
      <Carousel className="relative w-full max-w-3xl mx-auto">
        <CarouselContent>
          {teamMembers.map((member) => (
            <CarouselItem key={member.id} className="flex justify-center">
              <Card className="w-80 shadow-lg transition-transform duration-300 hover:scale-105">
                {/* Card Header (Image) */}
                <CardHeader className="relative w-full h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </CardHeader>

                {/* Card Content (Name & Role) */}
                <CardContent className="text-center p-4">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Previous & Next Buttons */}
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default TheTeam;
