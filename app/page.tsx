{/**use this as a homepage to import all the pages and components */}
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../pages/About';
import Features from '../components/Features';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';
import Blog from '../pages/Blog';
import News from '../pages/api/news'; // Adjust the import path based on your project structure
import Footer from '../components/Footer';

const Home: React.FC=() => {
  return (
    <div>
      <Navbar/>
      <Features />
      <Footer/>
    </div>
  );
}

export default Home;