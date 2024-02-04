"use client"
import React,{useState} from 'react';
import Image from 'next/image';
import DemoButton from './DemoButton';

  // Define a functional component named FAQ
  const FAQ: React.FC = () => {
   
  return (
    <div>
      {/*      <header className="w-full bg-FAQ" style={{height: '500px',backgroundImage: `url(${backgroundImage})`,backgroundSize: 'cover',backgroundPosition: 'center'}}>*/}
      <header className="w-full bg-primary-blue bg-hero " style={{ height: '500px' }}>
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="text-3xl md:text-5xl text-white px-4 py-12 text-center mb-4">
            <div className="flex flex-wrap justify-center items-baseline">
              <p className="text-white mr-4">
                Frequently Asked <span className="text-primary-pink-100">
                  Questions</span>
              </p>

            </div>
          </h1>
          <div className="relative py-12 mb-8">
            <DemoButton />
          </div>
        </div>
      </header>

      
  

<div className="flex justify-center items-center space-x-4" style={{ padding: '10%' }}>
        <DemoButton /> {/* Render the DemoButton component */}
      </div>

    </div>
  );
};

export default FAQ;