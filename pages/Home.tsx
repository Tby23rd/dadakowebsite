"use client"
import React from 'react';
import HeroSection from '../components/HeroSection';
import IntroductionSection from '@/components/IntroductionSection';
import About from './About';
import FaqPage from './FAQ';
import Features from '@/components/Features';
import ProcessTitle from '@/components/ProcessTitle';
import ProjectsCard from '@/components/projectCard';

const Home: React.FC = () => {

  return (
    <div className='bg-white '>
      <HeroSection/>
      <IntroductionSection/>
      <Features/>
      <About/>
      <ProcessTitle/>
      <ProjectsCard/>
      <FaqPage/>
    </div>
  );
}

export default Home;
