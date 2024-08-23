// components/IntroductionSection.tsx
import React from 'react';
import {whyChooseUsData} from '../data/whyChooseUsData';
import styles from '../styles/IntroductionSection.module.css';


const IntroductionSection: React.FC=() => {

  return (
    <div id='intro'>        
      <h1 className="text-4xl font-bold dark:bg-white">Why Choose Us</h1>
    <div className={styles.featuresContainer}>
      {whyChooseUsData.map((section,index) => (
        <div key={index} className={styles.feature}>
          <div className={styles.featureIcon}>{section.icon}</div>
          <h2 className={styles.featureTitle}>{section.title}</h2>
        </div>
      ))}
    </div>
    </div>
  );
};

{/** 
    <div>
              <h1 className="text-4xl font-bold">Why Choose Us </h1>
      <div className="flex flex-wrap justify-between">
        {whyChooseUsData.map((section, index) => {
          const Icon = section.Icon;
          return (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-2 text-center">
              <div className="bg-white dark:bg-gray-800 p-4 my-4 rounded-lg shadow-inner">
                  <p className="text-gray-700 dark:text-gray-300 mr-2 font-bold text-3xl ">
                    <Icon />
                  </p>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {section.title}
                  </h2>
              </div>
            </div>
            
          );
        })}
      </div>
    </div>
  );
};

*/}


export default IntroductionSection;



