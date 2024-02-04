// Features.tsx

import React from 'react';
import styles from '../styles/features.module.css';
import {
    DeveloperMode as DevelopmentIcon,
    Web as WebIcon,
    MobileFriendly as MobileIcon,
    ThreePRounded as ConsultingIcon,
    Support as SupportIcon,
    CheckCircle as QualityAssuranceIcon,
    MessageRounded as CustomerServiceIcon,

} from '@mui/icons-material';

interface FeatureData {
  title: string;
  icon: React.ReactNode;
  description: string;
}

interface FeatureProps {
  title: string;
  icon: React.ReactNode;
  description: string;

}

const Feature: React.FC<FeatureProps> = ({ title, icon,description }) => {
  return (
    <div className={styles.feature}>
      <div className={styles.featureIcon}>{icon}</div>
      <h2 className={styles.featureTitle}>{title}</h2>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
};

const FeaturesContainer: React.FC<{ features: FeatureData[] }> = ({ features }) => {
  return (
    <div className={styles.featuresContainer}>
      {features.map((feature, index) => (
        <Feature key={index} title={feature.title} icon={feature.icon} description={feature.description} />
      ))}
    </div>
  );
};

const Features: React.FC = () => {
    const featureData: FeatureData[] = [
            {
              icon: <DevelopmentIcon />,
              title: 'Custom Software Development',
              description: 'We offer tailored software solutions to meet specific client needs, providing a unique blend of creativity and technical expertise.',
            },
            {
                icon: <MobileIcon />,

              title: 'Mobile App Development',
              description: 'Our team creates mobile applications for both iOS and Android platforms, leveraging the latest mobile app development frameworks and tools.',
            },
            {
                icon: <WebIcon />,

              title: 'Web Development Services',
              description: 'We specialize in creating responsive, user-friendly websites, with proficiency in various web development languages and frameworks.',
            },
            {
                icon: <ConsultingIcon />,

              title: 'Software Consulting',
              description: 'Our software consulting services offer strategic advice, system recommendations, and implementation guidance to help clients choose the best software solutions for their business needs.',
            },
            {
                icon: <QualityAssuranceIcon />,

              title: 'Quality Assurance',
              description: 'We prioritize quality assurance to ensure the reliability and robustness of the software solutions we create. Our rigorous testing procedures and standards guarantee the highest quality software.',
            },
            {
                icon: <CustomerServiceIcon />,
              title: 'Transparent Communication',
              description: 'We believe in keeping our clients informed throughout the software development process. We provide regular updates on project progress, maintain open lines of communication, and keep our clients updated on project timelines and costs.',
            },
            {
            icon: <SupportIcon />,
              title: 'On-Going Maintenance and Support',
              description: 'We offer on-going maintenance and support for our software solutions, ensuring long-term success for our clients. Our support policies, update schedules, and troubleshooting services are designed to keep your software running smoothly.',
            },
        ];
        
  return (
    <div>
      <h1 className={styles.featuresHeader}>Our Features</h1>
      <FeaturesContainer features={featureData} />
    </div>
  );
};

export default Features;