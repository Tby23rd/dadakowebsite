// components/IntroductionSection.tsx
import React from 'react';
import { whyChooseUsData } from '../data/whyChooseUsData';

const IntroductionSection: React.FC = () => {
  return (
<div>
    <h1 className="text-3xl font-bold mb-4">Why Choose Us?</h1>
      <div className="flex flex-wrap justify-between">
        {whyChooseUsData.map((section, index) => (
          <div key={index} className="w-full md:w-1/2  lg:w-1/3 p-8">
            <div key={index} className="bg-white dark:bg-gray-800 p-4 my-4 rounded-lg shadow-inner">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {section.title}
          </h2>
          <p className="text-gray-700 dark:text-gray-400">
            {section.description}
          </p>
        </div>

          </div>
        ))}
      </div>
      </div>
  );
};

export default IntroductionSection;
