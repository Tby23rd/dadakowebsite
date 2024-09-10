"use client";

import React,{useState,useEffect,useTransition} from 'react';
import Image from 'next/image';
import {useRouter} from 'next/navigation'; // Corrected import path
import Loading from './Loading';
import Link from 'next/link';

const Navbar=() => {
  const [isMenuOpen,setIsMenuOpen]=useState(false);
  const [isPending,startTransition]=useTransition();
  const [isDarkMode,setIsDarkMode]=useState(false);
  const router=useRouter();


  const routes=[
    {href: '/',label: 'Home'},
    {href: '/#about',label: 'About'},
    {href: "/#features",label: 'Features'},
    {href: "/#portfolio",label: 'Portfolio'},
    {href: "/#faq",label: 'FAQS'}
  ];

  const handleNavigation=(href: string) => {
    startTransition(() => {
      router.push(href);
    });
  };


  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <>
      {isPending&&<Loading />}
      <nav className="relative  border-b ">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => handleNavigation('/')}>
              <Image src="/images/logo.png"
                alt="Logo" width={40} height={40} className="rounded-full" />
            </div>

             {/* Dark Mode Toggle
             <div className="flex items-center md:ml-4">
              <label htmlFor="dark-mode-toggle" className="relative flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  id="dark-mode-toggle"
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                  className="hidden"
                />
                <div className="w-12 h-6 bg-teal-900  rounded-full flex items-center">
                  <span
                    className={`block w-5 h-5 bg-white rounded-full transform transition-transform ${
                      isDarkMode ? 'translate-x-6' : ''
                    }`}
                  ></span>
                </div>
              </label>
              <span className="ml-2 text-sm font-medium  hidden md:inline">
                {isDarkMode ? 'Dark' : 'Light'}
              </span>
            </div>
             
             */}
             
          </div>



          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              className=" text-3xl focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen? '✕':'☰'}
            </button>
          </div>

          {/* Nav Links for Desktop */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {routes.map((route) => (
              <span
                key={route.href}
                onClick={() => handleNavigation(route.href)}
                className="block text-lg font-semibold cursor-pointer  hover:text-blue-600 "
              >
                {route.label}
              </span>
            ))}
            <Link href="/#portfolio">
              <button className="text-white hover:bg-teal-700 bg-teal-900 font-semibold  py-2 px-4 border  rounded">
                View Our Work
              </button>
            </Link>

          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {isMenuOpen&&(
          <div className="md:hidden flex flex-col items-center space-y-4 py-4">
            {routes.map((route) => (
              <span
                key={route.href}
                onClick={() => {
                  handleNavigation(route.href);
                  setIsMenuOpen(false);
                }}
                className="block text-lg font-semibold cursor-pointer  hover:text-blue-600 dark:hover:text-blue-400"
              >
                {route.label}
              </span>
            ))}
            <Link href="/#portfolio">
              <button className="text-white hover:bg-teal-700 bg-teal-900 font-semibold  py-2 px-4 border  rounded">
                View Our Work
              </button>
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;