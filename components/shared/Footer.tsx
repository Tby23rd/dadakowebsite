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
          <p className='text-xl p-2'>Address: Calgary, Alberta, Canada</p>
        </div>
        <div className='text-xl  p-2'>
          <h3 className='text-2xl text-center font-bold p-4'>Contact Us</h3>
          <p className='text-xl p-2'>Email: heather@dadakosoftware.com</p>
          <p className='text-xl p-2'>Phone: 403-401-8643 </p>
          {/* Social media links */}
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
        </div>

      </div>
      <div className='border-t-2'>
        <span className="text-sm italic text-center p-2 ">
          In the spirit of respect, reciprocity and truth, we honour and acknowledge Moh’kinsstis, and the traditional Treaty 7 territory and oral practices of the Blackfoot confederacy: Siksika, Kainai, Piikani, as well as the Îyâxe Nakoda and Tsuut’ina nations. We acknowledge that this territory is home to the Métis Nation of Alberta, Region 3 within the historical Northwest Métis homeland. Finally, we acknowledge all Nations – Indigenous and non – who live, work and play on this land, and who honour and celebrate this territory.
        </span>

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