import React from 'react';
import { whyChooseUsData } from '../../data/whyChooseUsData';

const IntroductionSection: React.FC = () => {
  return (
    <div className="w-full mx-auto p-4">
      <h1 className="mb-10 text-3xl font-bold">Why Choose Us</h1>
      {/* Reduced gap and padding within grid container */}
      <div className="w-full grid gap-6 grid-cols-3 lg:grid-cols-6">
        {whyChooseUsData.map((whyChooseUsData, index) => (
          <div key={index} className="flex flex-col items-center p-2  rounded-lg shadow-lg">
            <p className="lg:text-2xl text-sm font-bold">{whyChooseUsData.icon}</p>
            <h2 className="mt-2 lg:text-xl text-sm text-center font-semibold">{whyChooseUsData.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntroductionSection;
