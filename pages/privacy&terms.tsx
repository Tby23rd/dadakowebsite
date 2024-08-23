{/**import both privacy and terms */}
import React from 'react';
import PrivacyPolicy from './Privacy-Policy';
import TermsofUse from './Terms-Of-Use';
import  '@/app/layout';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyTerms: React.FC = () => {
    
    return (
        <div className='bg-white '>
            <Navbar/>
          <PrivacyPolicy/>
          <TermsofUse/>
          <Footer/>
        </div>
      );
}

export default PrivacyTerms;