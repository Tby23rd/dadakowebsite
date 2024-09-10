{/**import both privacy and terms */}
import PrivacyPolicy from '@/components/other/Privacy-Policy';
import TermsOfUse from '@/components/other/Terms-Of-Use';
import React from 'react';

const PrivacyTerms: React.FC = () => {
    
    return (
        <div className=' '>
          <PrivacyPolicy/>
          <TermsOfUse/>
        </div>
      );
}

export default PrivacyTerms;