import React from 'react';
import { Globe } from 'lucide-react';

const Achievements = () => {
  const awards = [
    {
      year: '2022',
      description: 'Best Business Consulting Firm in Nigeria by the African Business Awards.',
    },
    {
      year: '2023',
      description: 'Recognized for Community development capacity building for Entrepreneurs by G100 India',
    },
    {
      year: '2024',
      description: 'Recognized for Excellence in Digital Entrepreneurship Training by the World Leaders Foundation.',
    },
  ];

  return (
    <div className="bg-[#CF982B] text-white pt-[100px] pb-16 px-4 text-center relative">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
         <svg
          className="block w-full h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,64 C240,120 480,0 720,60 C960,120 1200,0 1440,40 L1440,0 L0,0 Z"
          />
        </svg>
      </div>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-10">Achievements and Awards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {awards.map((award, index) => (
            <div key={index} className="flex flex-col items-center">
              <Globe className="w-10 h-10 mb-4" />
              <h3 className="text-lg font-bold mb-2">{award.year}</h3>
              <p className="text-sm max-w-xs">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
