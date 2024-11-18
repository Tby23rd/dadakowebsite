"use client"
// components/Footer.tsx
import React,{useCallback} from 'react';
import {Reddit,Instagram,YouTube,LinkedIn} from '@mui/icons-material';
import Link from 'next/link';

const Footer: React.FC=() => {

  const navigate=useCallback((path: string) => {
    window.location.href=path
  },[]
  );

  return (
    <footer className='w-full m-2 shadow-xl '>
      <div className='md:flex m-auto border-t rounded-xl  justify-between p-2'>
        <div className='text-xl  p-2'>
          <h3 className='text-2xl text-center font-bold p-2'>Follow Us</h3>
          {/* Navigation links */}
          <p className='text-xl  p-2' onClick={() => navigate('/#faq')}>
            FAQ
          </p>

          <p className='text-xl  p-2' onClick={() => navigate('/privacy&terms')}>
            Privacy & Terms
          </p>
        </div>


        <div className='text-xl  p-2'>
          <h3 className='text-2xl text-center font-bold p-2'>Opening Hours</h3>
          <p className='text-xl p-2'>Monday - Sunday: 8 am to 8 pm</p>
        </div>
        <div className='text-xl  p-2'>
          <h3 className='text-2xl text-center font-bold p-4'>Contact Us</h3>
          <p className='text-xl p-2'>Email: advisor@triveconsulting.com</p>
          {/* Social media links
           <p className='text-xl p-2'>
            {' '}
            <a
              href="#"
              className=" mx-2  transition duration-300"
              title="Instagram"
            >
              <Instagram />
            </a>
            <a
              href="#"
              className=" mx-2  transition duration-300"
              title="LinkedIn"
            >
              <LinkedIn />
            </a>
            <a
              href="#"
              className=" mx-2  transition duration-300"
              title="Reddit"
            >
              <Reddit />
            </a>
            <a
              href="#"
              className=" mx-2  transition duration-300"
              title="YouTube"
            >
              <YouTube />
            </a>

          </p>
          
          */}

        </div>

      </div>

      <div className="border-t-2 ">
        <div className="text-green-900 mx-4 font-bold text-center ">
          <p>&copy; 2024
            <Link
              href="https://triveconsulting.com/"
              className="text-green-900 mx-2 font-bold text-center"
            >
              Trive Risk Consulting Inc.
            </Link>
            All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;