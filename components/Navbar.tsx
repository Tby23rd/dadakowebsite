"use client"
import React,{useState,useEffect,useCallback} from "react";
import {motion,AnimatePresence} from "framer-motion";
import GetInTouchButton from "./GetInTouchBtn";

const Navbar: React.FC=() => {
  const [isModalOpen,setModalOpen]=useState(false);
  // Initialize state without directly accessing window
  const [isNavOpen,setNavOpen]=useState<boolean>(false);

  // Define toggle functions
  const openModal=() => setModalOpen(true);
  const closeModal=() => setModalOpen(false);

  // Animation variants
  const navVariants={
    open: {opacity: 1,x: 0},
    closed: {opacity: 0,x: "-100%"},
  };

  // Toggle navigation
  const toggleNav=useCallback(() => {
    setNavOpen(!isNavOpen);
  },[isNavOpen]);

  useEffect(() => {
    // Safely set initial state based on window.innerWidth
    const updateNavState=() => setNavOpen(window.innerWidth>=768);
    // Call once to set initial state on client side
    updateNavState();

    // Handle resize to adjust state
    const handleResize=() => {
      updateNavState();
    };

    // Set up event listener
    window.addEventListener("resize",handleResize);

    // Clean up event listener
    return () => {
      window.removeEventListener("resize",handleResize);
    };
  },[]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-10 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:hidden absolute top-0 left-0 mt-6 ml-6">
          <button onClick={toggleNav} className="text-4xl">
            ☰
          </button>
        </div>

        <AnimatePresence>
          {isNavOpen&&(
            <motion.div
              className="fixed top-0 left-0 w-full h-full bg-primary-blue md:hidden"
              initial="closed"
              animate="open"
              exit="closed"
              variants={navVariants}
              transition={{type: "tween"}}
            ></motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isNavOpen&&(
            <motion.div
              className="md:w-full md:bg-transparent flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-14 py-4 md:py-0"
              initial="closed"
              animate="open"
              exit="closed"
              variants={navVariants}
              transition={{type: "tween"}}
            >
              {/* Navigation Links */}

              <a href="/#about" className="hover:text-primary-pink rounded-md text-lg font-medium">
                ABOUT
              </a>
              <a href="/#contact" className="hover:text-primary-pink rounded-md text-lg font-medium">
                CONTACT
              </a>
              <a href="/#faq" className="hover:text-primary-pink rounded-md text-lg font-medium">
                FAQ
              </a>
              <a href="/#features" className="hover:text-primary-pink rounded-md text-lg font-medium">
                FEATURES
              </a>
              <a href="/#portfolio"
                className="hover:text-primary-pink rounded-md text-lg font-medium">
                PORTFOLIO
              </a>

            </motion.div>
          )}
        </AnimatePresence>

        {isNavOpen&&(
          <div className="flex  m-2  justify-end">
            <GetInTouchButton />
            {/* Theme Switcher */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
