// pages/Process.js
import React, { useState } from 'react';
import { processSteps } from '../data/processSteps';

const ProcessDetails = () => (
  <div className="space-y-4 mt-8">
    {processSteps.map((step, index) => (
      <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
        <h2 className="text-2xl font-semibold mb-2">{step.title}</h2>
        <p>{step.description}</p>
      </div>
    ))}
  </div>
);


const ProcessTitle = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10">Our Process: Building Your Vision from Scratch</h1>
        {/* Process Step Titles */}
        <div className="circle-container flex justify-center space-x-4 overflow-x-scroll p-4">
          {processSteps.map((step, index) => (
            <div key={index} className="circle w-32 h-32 bg-teal-900 text-white rounded-full flex items-center justify-center shadow-lg">
              <h2 className="font-semibold text-lg">{step.title}</h2>
            </div>
          ))}
        </div>
        {/* Learn More Button */}
        <div className="text-center mb-8">
          <button onClick={() => setShowDetails(!showDetails)} className="px-6 py-2 bg-teal-900 text-white rounded hover:bg-teal-700 transition duration-300">
            {showDetails ? 'Show Less' : 'Learn More'}
          </button>
        </div>
        {/* Process Details */}
        {showDetails && <ProcessDetails />}
      </div>
    </div>
  );
};

export default ProcessTitle;
