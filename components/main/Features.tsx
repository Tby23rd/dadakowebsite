import React from 'react';
import featuresData from '../../data/featureData'; // Adjust the import path as necessary

const Features = () => {
  return (
    <div className="w-full mx-auto p-8 " id='features'>
      <h1 className="mb-10 text-3xl font-bold">Advanced Software Features</h1>
      {/* Reduced gap and padding within grid container */}
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
        {featuresData.map((feature, index) => (
          <div key={index} className="flex flex-col items-center p-2  rounded-lg shadow-lg">
            <div className="relative -mt-6">
              <div className="p-2 text-white bg-green-900 rounded-full">
                {React.createElement(feature.icon)}
              </div>
            </div>
            <h2 className="mt-2 text-xl text-center font-semibold">{feature.title}</h2>
            <p className="pt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
