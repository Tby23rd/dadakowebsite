import React from 'react';
// Assuming servicesData is correctly imported along with ServiceData type
import servicesData, { ServiceData } from '../data/serviceData';

const Service: React.FC<ServiceData> = ({ title, icon, description }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow">
      <div className="mb-2 text-center">{icon}</div> {/* Ensure your icon handling is compatible */}
      <h2 className="mb-2 text-xl font-semibold">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ServicesContainer: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
      {servicesData.map((service, index) => (
        <Service key={index} title={service.title} icon={service.icon} description={service.description} />
      ))}
    </div>
  );
};

const ServicesOverview: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-10">
        Expert Services for Everyone: Technical and Non-Technical
      </h1>
      <ServicesContainer />
    </div>
  );
};

export default ServicesOverview;
