// pages/faq.tsx
import React from 'react';
import Contact from './Contact';
import FaqComponent from '../helpers/FaqComponent';


const FaqPage: React.FC=() => {
  return (
    <div id='faq'>
      <h1 className="text-4xl font-bold ">
        Contact Us &  Frequently Asked Questions
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-between  rounded-lg shadow-lg md:p-20 px-4 py-12 md:px-20">

        <Contact />

        <FaqComponent />
      </div>
    </div>

  );
};

export default FaqPage;
