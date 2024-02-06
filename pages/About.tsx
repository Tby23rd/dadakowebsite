// pages/about.tsx
import React from 'react';
import Image from 'next/image';


const About: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white text-gray-800 md:p-20 px-4 py-12 md:px-20">
    <div className=" bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        About Dadako Software
      </h1>
      <div className="max-w-3xl mx-auto">
        <p className="text-gray-700 dark:text-gray-400 mb-6">
          Dadako Software is a Calgary-based software company that specializes in developing cutting-edge software solutions for startups and small businesses. Our mission is to empower entrepreneurs by providing innovative and effective digital tools that drive growth and efficiency.
        </p>
        <p className="text-gray-700 dark:text-gray-400 mb-6">
          We pride ourselves on understanding the unique needs of each business and crafting customized solutions that cater to those needs. With a strong track record in small business development and a commitment to continuous innovation, we are dedicated to helping small businesses thrive in today&apos;s competitive landscape.
        </p>
        <p className="text-gray-700 dark:text-gray-400">
          Our team is composed of experienced professionals who adhere to agile methodologies to ensure rapid delivery of high-quality software. We believe in clear communication, regular updates, and active involvement with our clients throughout the development process. Whether you&apos;re looking for top-notch services at competitive prices or a sustainable growth partnership, Dadako Software is here to help.
        </p>
      </div>
       
     
</div>
<div className="flex-1">
        {/* Example: Using a placeholder image. Replace with your actual image */}
        <Image src="/images/hero1.webp" 
        alt="Innovation" width={500} 
        height={300}  />
      </div>
    </div>
  );
};

export default About;
