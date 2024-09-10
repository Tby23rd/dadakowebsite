// pages/Process.js
import React,{useState} from 'react';
import Project from '@/components/other/Process';
import {processSteps} from '@/data/processSteps';


const ProcessTitle=() => {
  const [showDetails,setShowDetails]=useState(false);

  return (
    <div className="py-12">
      <div className=" mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10">Our Process: Building Your Vision from Scratch</h1>
        {/* Process Step Titles */}
        <div >
          <div className="grid pb-4 grid-cols-3 lg:grid-cols-8 gap-6">
            {processSteps.map((step,index) => (
              <div key={index} className="bg-teal-900 lg:p-4 text-white rounded-tr-full flex items-center justify-center shadow-lg">
                <h2 className="font-semibold text-lg">{step.title}</h2>
              </div>
            ))}
          </div>

          {/* Learn More Button */}
          <div className="text-center mb-8">
            <button onClick={() => setShowDetails(!showDetails)} className="px-6 py-2 bg-teal-900 text-white rounded hover:bg-teal-700 transition duration-300">
              {showDetails? 'Show Less':'Learn More'}
            </button>
          </div>
          {/* Process Details */}
          {showDetails&&<Project />}
        </div>
      </div>
    </div>
  );
};

export default ProcessTitle;
