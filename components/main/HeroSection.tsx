import React from 'react';
import Image from 'next/image';
import GetInTouchButton from '../btns/GetInTouchBtn';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between  ">
  <div className="flex-1 mb-8 md:mb-0 mr-10" id='hero'>
    <h2 className="lg:text-4xl text-2xl font-bold">
      Empower Your Business with Comprehensive Risk Management Solutions
    </h2>
    <p className="mb-6 lg:text-3xl text-xl">
      At Trive Risk, we specialize in helping businesses identify, assess, and navigate risks to ensure long-term success and resilience. 
      Discover how we can safeguard your operations by reaching out to us today.
    </p>
    <i>Expert Guidance at Your Fingertips</i>
    <div className="flex flex-wrap pt-4 gap-4">
          <a
            href="https://forms.gle/eM8ZNZE5znnDGkyB6" // Replace with your actual Google Form link
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-4 bg-green-900 hover:bg-green-800 text-white font-semibold rounded-md transition duration-300"
          >
            Sign Up for Updates
          </a>
      <Link href="/comingsoon">
        <button className="bg-transparent hover:bg-green-900 text-green-900 font-semibold hover:text-white py-2 px-4 border border-green-900 hover:border-transparent rounded">
          Explore Our Services
        </button>
      </Link>
    </div>
  </div>
  <div className="hidden md:block flex-1">
    <Image src="/images/t1.jpg"
     alt="Business Risk Solutions" 
     width={200} height={200}
      layout="responsive" />
  </div>
</section>

  );
};

export default HeroSection;
