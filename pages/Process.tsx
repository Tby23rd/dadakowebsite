import React from 'react';
import { processSteps } from '../data/processSteps';

const ProcessPage = () => {
  return (
    <div className="py-12 bg-white">
      <div className="w-full mx-auto px-4">
        {/* Use responsive grid classes */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-2">{step.title}</h2>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessPage;
