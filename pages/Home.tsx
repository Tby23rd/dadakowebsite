"use client"
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import News from './api/news'; // Adjust the import path based on your project structure
import Footer from '../components/Footer';
import IntroductionSection from '@/components/IntroductionSection';
import About from './About';


const Home: React.FC = () => {

  return (
    <div className='bg-gray-100'>
      <Navbar/>
      <HeroSection/>
      <About/>
      <IntroductionSection/>
      <Features />
      <News />
      <Footer/>
    </div>
  );
}

export default Home;
