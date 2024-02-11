// pages/project.js
import React from 'react';
import { processSteps } from '../data/processSteps';

const project = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="w-full mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10">Building Your Vision from Scratch</h1>
        <div className="space-y-6">
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

export default project;
