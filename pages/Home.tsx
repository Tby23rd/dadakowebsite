"use client"
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import IntroductionSection from '@/components/IntroductionSection';
import CharityContribution from '@/components/charity';
import About from './About';
import FaqPage from './FAQ';
import Projects from './Projects';
import Features from '@/components/Features';
import ServicesOverview from '@/components/services';

const Home: React.FC = () => {

  return (
    <div className='bg-gray-100 '>
      <Navbar/>
      <HeroSection/>
      <Features/>
      <IntroductionSection/>
      <About/>
      <ServicesOverview/>
      <Projects/>
      <FaqPage/>
      <CharityContribution/>
      <Footer/>
    </div>
  );
}

export default Home;
