import React from 'react';

const TheTeam: React.FC = () => {

  return (
    <section className="container mx-auto py-16">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold font-playfair">Our Team</h2>
      </div>
      
      {/* You can add the grid and map for the team members back here later.
      */}
      <div className="text-center p-8 bg-gray-100 rounded-lg">
        <p>Our team is made up of experienced professionals from diverse disciplines including business strategy, digital marketing, leadership development, financial literacy, and entrepreneurship.

Our consultants have a proven track record of delivering successful outcomes in both the public and private sectors.</p>
      </div>
    </section>
  );
};

export default TheTeam;
