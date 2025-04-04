"use client";

import Image from "next/image";
import React from "react";
import { FaDesktop } from "react-icons/fa"; // Monitor Icon
import { motion } from "framer-motion";

const features = [
  { title: "World-Class Training", description: " We provide business training and certification programs that are both world-class and affordable, ensuring that high-quality education is accessible to all." },
  { title: "Customized Consultancy", description: " Our consulting services are targeted to meet the unique needs of each client, offering personalized leadership coaching and business growth strategies." },
  { title: "Innovation and Accessiblity", description: " We are dedicated to promote innovation, leadership, and entrepreneurship through accessible education, making professional training available to a diverse audience." },
  { title: "Practical experience", description: " Our programs include hands-on, practical learning opportunities through internships, mentorships, and interactive workshops to ensure real-world readiness" },
  { title: "Strategic Partnership", description: " We collaborate with globally recognized institutions to provide certifications that are respected and valued worldwide, enhancing the credibility of our programs." },
  { title: "Continuous Empowerment", description: " We focus on empowering individuals from underserved communities by providing them with the skills and resources needed to succeed in business." },
  { title: "Community Improvement", description: "We stay at the forefront of industry trends and advancements, continuously updating our courses and consulting practices to ensure relevance and effectiveness." },
];

const WorkWithUs = () => {
  return (
    <section className="container mx-auto px-6 py-16 font-playfair">
      {/* Top Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose Us?</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
        </p>
      </motion.div>

      {/* Cards Section */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, staggerChildren: 0.3 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
          >
            <FaDesktop className="text-[#444] text-5xl mb-4" />
            <h2 className="text-xl font-semibold text-gray-900">{feature.title}</h2>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WorkWithUs;
