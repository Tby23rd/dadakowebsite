import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const FaqComponent: React.FC = () => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number | null>(null);

  const faqItems: FaqItem[] = [
    {
      question: 'What services does Trive Risk provide?',
      answer: 'Trive Risk offers comprehensive risk management solutions, including risk assessment, mitigation planning, and ongoing monitoring to help businesses navigate uncertainties and build resilience.'
    },
    {
      question: 'How can Trive Risk help my business manage risks effectively?',
      answer: 'We specialize in identifying potential risks, developing tailored mitigation strategies, and providing tools to monitor and address risks proactively, ensuring your business stays protected and prepared for future challenges.'
    },
    {
      question: 'How does Trive Risk ensure its solutions are scalable?',
      answer: 'Our solutions are designed with scalability in mind, allowing businesses to adapt as they grow. We leverage cutting-edge technologies and frameworks to ensure our tools can handle increasing complexity and volume.'
    },
    {
      question: 'What is Trive Risk’s approach to developing risk management strategies?',
      answer: 'We follow a structured process that includes thorough business analysis, risk identification, strategy development, and implementation. Our goal is to deliver actionable solutions within 2 to 6 months, depending on the scope and complexity.'
    },
    {
      question: 'How does Trive Risk ensure the security and reliability of its solutions?',
      answer: 'Security is a top priority at Trive Risk. We use the latest frameworks and technologies to safeguard your data and systems, ensuring compliance with industry standards and protecting your business from potential threats.'
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
