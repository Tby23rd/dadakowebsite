import React from 'react';
import Project from '@/components/other/Process';
import { processSteps } from '@/data/processSteps';

const ProcessTitle = () => {
  return (
    <div className="py-12">
      <div className="mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10">
          Our Process: Building Your Vision from Scratch
        </h1>
        {/* Display All Process Steps */}
        <div className="grid pb-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="bg-green-900 p-6 text-white rounded-lg shadow-lg"
            >
              <h2 className="font-bold text-xl mb-4">{step.title}</h2>
              <p className="text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessTitle;
