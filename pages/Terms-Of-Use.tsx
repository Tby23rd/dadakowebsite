// pages/TermsOfUse.tsx
import React from 'react';

const TermsOfUse: React.FC = () => {
  return (
    <div className="bg-white text-gray-700">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-center text-4xl font-bold text-gray-900 mb-8">
          Terms of Use
        </h1>

        <p className="text-xl text-gray-600 mb-4">
          Welcome to Dadako Software!</p>
       

        <article className="space-y-6">
         
            These Terms of Use (&quot;Terms&quot;) govern your access to and use of our website,
            Dadako Software Inc, and any related services offered by Dadako Software (&quot;Dadako&quot;, &quot;we&quot;,
            &quot;us&quot;, or &quot;our&quot;).
         

          {/* Following the structure for readability and emphasis */}
         
            Please read these Terms carefully before using our website. By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part of these Terms, you may not access or use our website.
         

          <h2 className="text-2xl font-semibold text-gray-900">
            1. Acceptance of Terms
          </h2>
         
            By using our website, you agree to be bound by and comply with these Terms and any future amendments or modifications. We may revise these Terms at any time without prior notice. You are responsible for regularly reviewing these Terms to ensure you are aware of any changes. Your continued use of the website after such changes will constitute your acceptance of such changes.
         

          <h2 className="text-2xl font-semibold text-gray-900">
            2. Use of Website
          </h2>
         
            You may use our website only for lawful purposes and in accordance with these Terms. You agree not to:
         
          <ul className="list-disc ml-6">
            <li>Use our website in any way that violates any applicable laws or regulations.</li>
            <li>Infringe the intellectual property rights of others.</li>
            <li>Transmit any material that is harmful, threatening, abusive, defamatory, obscene, or otherwise objectionable.</li>
            <li>Interfere with or disrupt the website or its servers.</li>
            <li>Attempt to gain unauthorized access to our website or systems.</li>
          </ul>

          {/* Additional sections would continue here, following the pattern above */}
          <h2 className="text-2xl font-semibold text-gray-900">
            3. Disclaimer of Warranties
          </h2>
         
            Dadako does not guarantee that the website will be secure, reliable, or free from errors or bugs. You should use caution when accessing the website and take appropriate precautions to protect your personal information. We reserve the right to change, modify, or remove the website at any time without notice.
         
          <h2 className="text-2xl font-semibold text-gray-900">
            4. Limitation of Liability
          </h2>
         
            Dadako is not liable for any damages, including direct, indirect, INCIDENTAL, or CONSEQUENTIAL DAMAGES, arising out of the use of the website or services provided by Dadako.
         

          <h2 className='text-2xl font-semibold text-gray-900'>
            5. Indemnification
          </h2>
         
            You agree to indemnify and hold Dadako harmless from any claims, damages, or expenses arising from your use of the website or services provided by Dadako.
         

          <h2 className="text-2xl font-semibold text-gray-900">
            6. Termination
          </h2>
         
            Dadako reserves the right to terminate your access to the website at any time for any reason, without prior notice.
         

          <h2 className="text-2xl font-semibold text-gray-900">
            7. Governing Law
          </h2>
         
            These Terms and any related documents are governed by the laws of the province of Alberta, 
            without regard to its conflict of law provisions. You agree
             to submit to the personal jurisdiction of the courts located in
              Alberta for any action or proceeding arising out of or in connection with these Terms.
                 </article>
      </div>
    </div>
  );
};

export default TermsOfUse;
