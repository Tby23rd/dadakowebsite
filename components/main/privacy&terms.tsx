{/**import both privacy and terms */}
import React from 'react';
import PrivacyPolicy from '../other/Privacy-Policy';
import TermsofUse from './Terms-Of-Use';

const PrivacyTerms: React.FC = () => {
    
    return (
        <div className=' '>
          <PrivacyPolicy/>
          <TermsofUse/>
        </div>
      );
}

export default PrivacyTerms;