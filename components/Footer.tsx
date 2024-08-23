"use client"
// components/Footer.tsx
import React,{useCallback} from 'react';
import {Facebook,Instagram,YouTube,LinkedIn} from '@mui/icons-material';
import Link from 'next/link';

const Footer: React.FC=() => {

  const navigate=useCallback((path: string) => {
    window.location.href=path
  },[]
  );

  return (
    <footer className='w-full bg-white m-2'>
      <div className='md:flex justify-between p-2'>
        <div className='text-xl  p-2'>
          <h3 className='text-2xl text-center font-bold p-2'>Follow Us</h3>
            {/* Navigation links */}
            <p className='text-xl  p-2' onClick={() => navigate('/#faq')}>
              FAQ
            </p>

            <p className='text-xl  p-2' onClick={() => navigate('/#terms-of-service')}>
              TERMS OF SERVICE
            </p>
            <p className='text-xl  p-2' onClick={() => navigate('/#privacy-policy')}>
              PRIVACY POLICY
            </p>
        </div>


        <div className='text-xl  p-2'>
          <h3 className='text-2xl text-center font-bold p-2'>Opening Hours</h3>
          <p className='text-xl p-2'>Monday - Friday: 8 am to 8 pm</p>
          <p className='text-xl p-2'>Saturday - Sunday: 9 am to 6 pm</p>
          <p className='text-xl p-2'>Address: Calgary, Alberta, Canada</p>
        </div>
        <div className='text-xl  p-2'>
          <h3 className='text-2xl text-center font-bold p-4'>Contact Us</h3>
          <p className='text-xl p-2'>Email: heather@dadakosoftware.com</p>
          <p className='text-xl p-2'>Phone: (236)865 8256 </p>
          {/* Social media links */}
          <p className='text-xl p-2'>
            {' '}
            <a
              href="#"
              className="text-white mx-2 hover:text-gray-400 transition duration-300"
              title="Instagram"
            >
              <Instagram style={{color: 'white'}} />
            </a>
            <a
              href="#"
              className="text-white mx-2 hover:text-gray-400 transition duration-300"
              title="LinkedIn"
            >
              <LinkedIn style={{color: 'white'}} />
            </a>
            <a
              href="#"
              className="text-white mx-2 hover:text-gray-400 transition duration-300"
              title="Facebook"
            >
              <Facebook style={{color: 'white'}} />
            </a>
            <a
              href="#"
              className="text-white mx-2 hover:text-gray-400 transition duration-300"
              title="YouTube"
            >
              <YouTube style={{color: 'white'}} />
            </a>
          </p>
        </div>

      </div>
      <div className="border-t-2 ">
      <div className="text-teal-900 mx-4 font-bold text-center ">
        <p>&copy; 2024
          <Link
            href="https://dadakosoftware.com/"
            className="text-teal-900 mx-2 font-bold text-center"
          >
            Dadako Software Inc.
          </Link>
          All rights reserved.</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;