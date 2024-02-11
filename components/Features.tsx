// pages/Features.js or components/Features.js
import React from 'react';
import featuresData from '../data/featureData'; // Adjust the import path as necessary

const Features = () => {
  return (
    <div className="max-w-4xl text-center mx-auto p-5">
      <h1 className="text-3xl font-bold  mb-10">Advanced Software Features</h1>
      <div className="space-y-8 p-2">
        {featuresData.map((feature, index) => (
          <div key={index} className="bg-white  shadow-lg rounded-lg p-4">
            <div className='text-4xl '>
          <feature.icon /></div>
            <h2 className="text-2xl font-semibold">{feature.title}</h2>
            <p className='pt-4'>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
