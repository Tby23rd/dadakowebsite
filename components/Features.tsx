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
    <div className={styles.feature} id='features'>
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
              description: 'We offer tailored software solutions, blending creativity and technical expertise to meet specific client needs.'
            },
            {
                icon: <WebIcon />,

              title: 'Web Development Services',
              description: 'We specialize in creating responsive and user-friendly websites, with proficiency in various web development languages and frameworks.'
            },
            {
                icon: <ConsultingIcon />,

              title: 'Software Consulting',
              description: 'Our software consulting team offers the most advanced system recommendations and implementation to ensure clients have the best software available for their operational needs.'
            },
            {
                icon: <QualityAssuranceIcon />,

              title: 'Quality Assurance',
              description: 'We prioritize quality assurance to lock in the reliability of the software solutions we create. Our standards and rigorous testing procedures guarantee the highest quality software.'
            },
            {
                icon: <CustomerServiceIcon />,
              title: 'Transparent Communication',
              description:'We believe in keeping you informed throughout the entire process. We provide regular updates on project progress, maintain open lines of communication, and guarantee complete transparency of all project timelines and costs.' 
            },
            {
            icon: <SupportIcon />,
              title: 'On-Going Maintenance and Support',
              description: 'We offer ongoing maintenance and support for our software solutions, ensuring long-term success for our clients. Our support policies, update schedules, and troubleshooting services are designed to keep your software running smoothly.'

            },
        ];
        
  return (
    <div>
        <h1 className="text-4xl font-bold">
        Our Features</h1>
      <FeaturesContainer features={featureData} />
    </div>
  );
};

export default Features;