// data/servicesData.ts
import React from 'react';
import {
  DeveloperMode as DevelopmentIcon,
  Web as WebIcon,
  Cloud as CloudIcon,
  Security as SecurityIcon,
  TrendingUp as AnalyticsIcon,
  Extension as IntegrationIcon,
  SupportAgent as SupportIcon,
  VerifiedUser as QualityAssuranceIcon,
  Forum as CustomerServiceIcon,
  AccountTree as ConsultingIcon,
} from '@mui/icons-material';

export interface ServiceData {
  title: string;
  icon: JSX.Element;
  description: string;
}

const servicesData: ServiceData[] = [
  {
    icon: <DevelopmentIcon />,
    title: 'Custom Software Development',
    description: 'We offer tailored software solutions, blending creativity and technical expertise to meet specific client needs.',
  },
  {
    icon: <WebIcon />,
    title: 'Web Development Services',
    description: 'We specialize in creating responsive and user-friendly websites, with proficiency in various web development languages and frameworks.',
  },
  {
    icon: <ConsultingIcon />,
    title: 'Software Consulting',
    description: 'Our software consulting team offers the most advanced system recommendations and implementation to ensure clients have the best software available for their operational needs.',
  },
  {
    icon: <QualityAssuranceIcon />,
    title: 'Quality Assurance',
    description: 'We prioritize quality assurance to lock in the reliability of the software solutions we create. Our standards and rigorous testing procedures guarantee the highest quality software.',
  },
  {
    icon: <CustomerServiceIcon />,
    title: 'Transparent Communication',
    description: 'We believe in keeping you informed throughout the entire process. We provide regular updates on project progress, maintain open lines of communication, and guarantee complete transparency of all project timelines and costs.',
  },
  {
    icon: <SupportIcon />,
    title: 'On-Going Maintenance and Support',
    description: 'We offer ongoing maintenance and support for our software solutions, ensuring long-term success for our clients. Our support policies, update schedules, and troubleshooting services are designed to keep your software running smoothly.',
  },
  {
    icon: <CloudIcon />,
    title: 'Cloud-Based Solutions',
    description: 'Enjoy the flexibility and accessibility of cloud-based software. Access your data and applications from anywhere, at any time, ensuring that your business stays agile and responsive.',
  },
  {
    icon: <SecurityIcon />,
    title: 'Data Security and Privacy',
    description: 'Protect your sensitive information with our robust security features. We prioritize data protection in every software solution, ensuring compliance with industry standards and regulations.',
  },
  {
    icon: <AnalyticsIcon />,
    title: 'Analytics and Reporting',
    description: 'Make informed decisions with comprehensive analytics and reporting features. Our software provides valuable insights into your business performance, helping you identify opportunities for improvement and growth.',
  },
  {
    icon: <IntegrationIcon />,
    title: 'Seamless Integrations',
    description: 'Connect your software ecosystem with seamless integrations. Our solutions can integrate with existing tools and platforms, ensuring smooth workflows and data synchronization across your business.',
  },
  {
    icon: <IntegrationIcon />, // Replace with a suitable icon for Web3/Blockchain
    title: 'Web3 and Blockchain Integration',
    description: 'Harness the power of Web3 and Blockchain to enhance security, transparency, and efficiency in your business operations. Our solutions enable decentralized applications, smart contracts, and secure transactions, empowering your business to leverage the latest in blockchain technology for trustless interactions and improved business models.',
  },
];

export default servicesData;
