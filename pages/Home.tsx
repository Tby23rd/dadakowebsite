"use client"
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import IntroductionSection from '@/components/IntroductionSection';
import CharityContribution from '@/components/charity';
import About from './About';
import FaqPage from './FAQ';
import Projects from './Process';
import Features from '@/components/Features';
import ServicesOverview from '@/components/services';
import ProcessTitle from '@/components/ProcessTitle';

const Home: React.FC = () => {

  return (
    <div className='bg-white '>
      <Navbar/>
      <HeroSection/>
      <IntroductionSection/>
      <Features/>
      <About/>
      <ServicesOverview/>
      <ProcessTitle/>
      <FaqPage/>
      <Footer/>
    </div>
  );
}

export default Home;
