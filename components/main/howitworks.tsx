import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const steps = [
  {
    step: "Step 1 (1 Week)",
    title: "Develop Your Website",
    description: "We start by creating a professional website tailored to your startup's unique needs. This serves as the online foundation for your business, showcasing your mission, vision, and offerings to the world.",
    image: "/images/w.png",
    buttonText: "View Sample Website",
    buttonLink: "/contact"
  },
  {
    step: "Step 2 (1 Month)",
    title: "Launch Your Demo Application",
    description: "Next, we develop a demo version of your web application with read-only data. This allows you to present your concept to investors, customers, and stakeholders, providing them with a tangible experience of your product.",
    image: "/images/s5.png",
    buttonText: "View Sample Demo",
    buttonLink: "https://demo.bomafem.com/"
  },
  {
    step: "Step 3 (Dependent on Features)",
    title: "Build Your Full Web Application",
    description: "Finally, we bring your vision to life with a fully functional web application. This is where your startup truly takes off, with features designed to scale your business and meet your users' needs.",
    image: "/images/p6.png",
    buttonText: "View Sample App",
    buttonLink: "/contact"
  },
];

const SignUpSection: React.FC = () => {
  const [isPending, startTransition] = useTransition();

  const handleButtonClick = (link: string) => {
    startTransition(() => {
      window.location.href = link; // Redirect to the appropriate page
    });
  };

  return (
    <div className="max-w-7xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
      <div className="space-y-16">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="md:w-1/2">
              <Image
                src={step.image}
                alt={`${step.title} - image`}
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-xl font-bold mb-2">{step.step}</h3>
              <h4 className="text-4xl font-bold mb-4">{step.title}</h4>
              <p className="text-lg mb-6">{step.description}</p>
              <button
                onClick={() => handleButtonClick(step.buttonLink)}
                className="px-6 py-3 text-lg font-semibold text-white bg-teal-900 rounded-md hover:bg-teal-700"
                rel="noopener noreferrer"
              >
                {step.buttonText}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SignUpSection;
