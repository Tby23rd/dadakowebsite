import React from 'react';

const About: React.FC=() => {

  return (
    <div id="about">
    <h1 className="text-4xl font-bold text-center mb-10">
      About Trive Risk
    </h1>
    <div className="w-full container mx-auto p-4">
      <div className="flex gap-4">
        <p className="text-black mb-6">
          Based in Canada, Trive Risk is dedicated to helping businesses navigate the complexities of risk management. Our tailored solutions empower organizations to anticipate challenges, protect their assets, and ensure long-term success. We are committed to fostering resilience and innovation across industries.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-2xl font-bold mb-2">Mission</h2>
          <p className="text-black mb-4">
            Our mission is to equip businesses with the tools and insights they need to manage risks effectively, enabling them to thrive in an ever-changing environment.
          </p>
          <h2 className="text-2xl font-bold mb-2">Vision</h2>
          <p className="text-black">
            To be the trusted partner in risk management, helping businesses across Canada achieve resilience and sustainable growth through innovative solutions.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">Values</h2>
          <ul className="list-disc list-inside text-black">
            <li>Resilience: Empowering businesses to adapt and overcome challenges.</li>
            <li>Innovation: Delivering forward-thinking solutions to manage risk effectively.</li>
            <li>Integrity: Building trust through transparency and ethical practices.</li>
            <li>Collaboration: Partnering closely with clients to tailor solutions that meet their specific needs.</li>
            <li>Excellence: Committing to exceptional quality in every service we provide.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default About;
