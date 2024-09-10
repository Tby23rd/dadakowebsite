import React from 'react';

const About: React.FC=() => {

  return (
    <div id='#about'>
      <h1 className="text-4xl font-bold text-center mb-10">
        About Dadako Software
      </h1>
      <div className="w-full container mx-auto p-4 ">
        <div className="flex gap-4">
          <p className="text-black mb-6">
            Based in Calgary, Dadako Software is dedicated to empowering startups and small businesses, with a special focus on fostering growth and innovation in women-led ventures. Our tailored software solutions are designed not only to meet the unique challenges faced by these businesses but also to leverage the untapped potential within the women-led entrepreneurial community.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h2 className="text-2xl font-bold mb-2">Mission</h2>
            <p className="text-black mb-4">
              Our mission is to support women entrepreneurs by providing them with the digital tools necessary to scale their businesses, break barriers, and thrive in competitive markets.
            </p>
            <h2 className="text-2xl font-bold mb-2">Vision</h2>
            <p className="text-black">
              To become the preferred technology partner for women-led businesses worldwide, helping them to achieve sustainable growth and success through innovative software solutions.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Values</h2>
            <ul className="list-disc list-inside text-black">
              <li>Empowerment: Elevating women entrepreneurs by equipping them with the tools to succeed.</li>
              <li>Innovation: Pioneering solutions that address the unique needs of women-led businesses.</li>
              <li>Integrity: Cultivating trust through honesty, respect, and ethical practices.</li>
              <li>Collaboration: Fostering strong partnerships with our clients to ensure their visions are realized.</li>
              <li>Excellence: Committing to the highest standards in every solution we deliver.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
