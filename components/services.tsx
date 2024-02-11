// Assuming this is in pages/ServicesOverview.tsx or components/ServicesOverview.tsx
import React from 'react';
import styles from '../styles/features.module.css';
import servicesData, { ServiceData } from '../data/serviceData'; // Adjust the import path as necessary

const Service: React.FC<ServiceData> = ({ title, icon, description }) => {
  return (
    <div className={styles.feature} id='features'>
      <div className={styles.featureIcon}>{icon}</div>
      <h2 className={styles.featureTitle}>{title}</h2>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
};

const ServicesContainer: React.FC = () => {
  return (
    <div className={styles.featuresContainer}>
      {servicesData.map((service, index) => (
        <Service key={index} title={service.title} icon={service.icon} description={service.description} />
      ))}
    </div>
  );
};

const ServicesOverview: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold ">
        Expert Services for Everyone: Technical and Non-Technical
      </h1>
      <ServicesContainer />
    </div>
  );
};

export default ServicesOverview;
