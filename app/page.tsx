"use client"
import React from 'react';
import IntroductionSection from '@/components/main/IntroductionSection';

import Features from '@/components/main/Features';
import SignUpSection from '@/components/main/howitworks';
import HeroSection from '@/components/main/HeroSection';
import About from '@/components/other/About';
import ProcessTitle from '@/components/helpers/ProcessTitle';
import ProjectsCard from '@/components/helpers/projectCard';
import FaqPage from '@/components/other/FAQ';

const Home: React.FC = () => {

  return (
    <>
      <HeroSection/>
      <IntroductionSection/>
      <SignUpSection/>
      <Features/>
      <About/>
      <ProcessTitle/>
      <ProjectsCard/>
      <FaqPage/>
    </>
  );
}

export default Home;
