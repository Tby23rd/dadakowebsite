// pages/faq.tsx
import React from 'react';
import FaqComponent from '../components/FaqComponent';
import Contact from './Contact';
import '../app/globals.css'; // Adjust the path based on your file structure


const FaqPage: React.FC = () => {
  return (<div id='faq'>
<h1 className="text-4xl font-bold">
        Contact Us &  Frequently Asked Questions
      </h1> 
    
    <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-lg shadow-lg md:p-20 px-4 py-12 md:px-20">
      
      <Contact/>

      <FaqComponent />
      {/* Optionally, include an image or another component on the right side */}
    </div>
  </div>

  );
};

export default FaqPage;
