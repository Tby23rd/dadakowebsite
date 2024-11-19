import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const FaqComponent: React.FC = () => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number | null>(null);

  const faqItems: FaqItem[] = [
    {
      question: 'What kind of software solutions does Dadako Software provide?',
      answer: 'Dadako Software provides a range of software solutions tailored to startups and small businesses, including web development, mobile app development, and custom software solutions.'
    },
    {
      question: 'What types of software solutions does your company offer?',
      answer: 'We specialize in developing cutting-edge software solutions tailored to startups and small businesses, focusing on web development, mobile app development, and custom software solutions.'
    },
    {
      question: 'How do you ensure the software solutions you develop are scalable?',
      answer: 'Our expert team crafts software designed to adapt, scale, and contribute to your bottom line. We adhere to DevOps, Agile, and Lean project management tactics to ensure our solutions meet the growing needs of your business.'
    },
    {
      question: 'What is the process for software development for startups with your company?',
      answer: 'We guide startups through the entire process, from business analysis and creating a technical development strategy to end-to-end implementation, reliable support, and further scaling. We aim to complete projects within  2 to  6 months from starting the MVP development to its market validation.'
    },
    {
      question: 'What guarantees do you offer regarding the security and reliability of the software solutions?',
      answer: 'We prioritize clean code and supreme safety from security issues. We implement the latest frameworks, architecture designs, and advanced technologies to ensure our software solutions are secure and reliable. We also have a high retention rate of customers after MVP development.'
    }
    // Add more FAQ items here
  ];


const toggleAccordion = (index: number) => {
  setActiveQuestionIndex(index === activeQuestionIndex ? null : index);
};


  return (
    <div className="p-6">
      
      <div className="max-w-3xl mx-auto">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b border-gray-200 py-6">
            <button
              onClick={() => toggleAccordion(index)}
              className="text-left w-full flex justify-between items-center"
            >
              <div className="text-lg font-medium text-black ">
                {item.question}
              </div>
              <svg
                className={`${
                  activeQuestionIndex === index ? 'rotate-180' : ''
                } transform transition duration-500 ease-in-out`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0  0  20  20"
                fill="currentColor"
                width="24"
                height="24"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293  7.293a1  1  0  011.414  0L10  10.586l3.293-3.293a1  1  0  111.414  1.414l-4  4a1  1  0  01-1.414  0l-4-4a1  1  0  010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {activeQuestionIndex === index && (
              <p className="mt-4 text-base text-black ">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqComponent;
