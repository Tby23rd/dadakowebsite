import React from 'react';
import Image from 'next/image';
import GetInTouchButton from './GetInTouchBtn';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-white text-gray-800 py-20 px-4">
      <div className="flex-1 mb-8 md:mb-0 mr-10" id='hero'>
        <h2 className="lg:text-4xl text-2xl font-bold">
          Elevate Your Small Business or Startup with Expert Software Design & Development
        </h2>
        <p className="mb-6 pt-4 lg:text-3xl text-xl">
          At Dadako Software Inc. we&apos;re committed to making technology accessible and beneficial for everyone, regardless of technical expertise. 
          Discover how we can help bring your project to life by reaching out to us today.
        </p>
        <i>Immediate Assistance via Live Chat</i>
        <div className="flex flex-wrap pt-4 gap-4">
          <GetInTouchButton />
          <Link href="/Soon">
          <button className="bg-transparent hover:bg-teal-900 text-teal-900 font-semibold hover:text-white py-2 px-4 border border-teal-900 hover:border-transparent rounded">
              View Our Work
            </button>
          </Link>
        </div>
      </div>
      {/* Hide on mobile, show on md screens and up */}
      <div className="hidden md:block flex-1">
        {/* Example: Using a placeholder image. Replace with your actual image */}
        <Image src="/images/heronobg.png" alt="Empowering Women in Business" width={500} height={300} layout="responsive" />
      </div>
    </section>
  );
};

export default HeroSection;
