// pages/about.tsx
import React from 'react';
import Image from 'next/image';


const About: React.FC=() => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white dark:bg-gray-800 rounded-lg shadow-lg md:p-20 px-4 py-12 md:px-20">
      <div className="p-6 " id='about'>
        <h1 className="text-4xl font-bold">
          About Dadako Software
        </h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-700 dark:text-gray-400 mb-6">
          Dadako Software is a Calgary-based software company providing startups and small businesses with advanced - yet user-friendly - software solutions. Our mission is to empower you from the ground up, by providing innovative digital tools that are proven to skyrocket company growth and efficiency.          </p>
          <p className="text-gray-700 dark:text-gray-400 mb-6">
          We pride ourselves on understanding the unique needs of each business. We also acknowledge that building the advanced software that your team will come to rely on for daily operations is a daunting task. That’s where we come in, and you sit back. Our personalized project management team keeps you involved and informed every step of the way, so you are never in the dark about what’s going into the backend operations of your business. With a strong track record in small business development and a commitment to continuous innovation, we are dedicated to helping small businesses thrive in today&apos;s competitive landscape.          </p>
          <p className="text-gray-700 dark:text-gray-400">
          Our team is composed of experienced professionals whose shared passion is the guaranteed delivery of high-quality software. We believe in clear communication, regular updates, and active involvement with our clients throughout the development process. Whether you&apos;re looking for top-notch services at competitive prices or a sustainable growth partnership, Dadako Software is excited to meet those needs.          </p>
        </div>
      </div>
      <div className="flex-1">
        {/* Example: Using a placeholder image. Replace with your actual image */}
        <Image src="/images/about.webp"
          alt="Innovation" width={500}
          height={300} />
      </div>
    </div>
  );
};

export default About;
