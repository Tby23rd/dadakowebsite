import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const steps = [
  {
    step: "Step 1 (1 Week)",
    title: "Assess Your Business Risks",
    description: "We begin by conducting a comprehensive risk assessment tailored to your business. This step identifies potential vulnerabilities and helps you understand the risk landscape.",
    image: "/images/t.jpg",
    buttonText: "Learn More",
    buttonLink: "https://calendly.com/advisor-triverisk/1-1-on-trive-risk"
  },
  {
    step: "Step 2 (1 Month)",
    title: "Develop a Risk Mitigation Plan",
    description: "Next, we create a customized risk mitigation plan, focusing on strategies to address identified risks and improve your business resilience.",
    image: "/images/t1.jpg",
    buttonText: "Request Sample Plan",
    buttonLink: "https://calendly.com/advisor-triverisk/1-1-on-trive-risk"
  },
  {
    step: "Step 3 (Ongoing)",
    title: "Implement and Monitor Solutions",
    description: "Finally, we work with you to implement the solutions and provide ongoing monitoring. This ensures your business stays protected and prepared for future challenges.",
    image: "/images/t2.jpg",
    buttonText: "Explore Services",
    buttonLink: "https://forms.gle/eM8ZNZE5znnDGkyB6"
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
      <h2 className="text-4xl font-bold text-center mb-12">How We Help</h2>
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
                className="px-6 py-3 text-lg font-semibold text-white bg-green-900 rounded-md hover:bg-green-700"
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
