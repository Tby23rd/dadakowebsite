// pages/PrivacyPolicy.tsx
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className=" text-gray-700">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-center text-4xl font-bold text-gray-900 mb-8">
          Privacy Policy
        </h1>

        <div className="text-left max-w-4xl mx-auto">
          <p className="mt-4">
            Protecting Your Privacy
          </p>
          <p className="mt-2">
            Dadako Software is committed to protecting the privacy of our users. This Privacy Policy explains how we collect, use,
             and disclose information that we obtain through our website
          </p>

          <h3 className="text-2xl  mt-6">
            1. Information We Collect
          </h3>
          <p className="mt-2">
            We may collect the following information from you:
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li>Personal Information: When you contact us through our website, you may choose to provide us with your name, email address, phone number, and other information to help us respond to your inquiry.</li>
            <li>Non-Personal Information: We may collect non-personal information about your use of the website, such as your browsing history, IP address, and device information. This information is collected through cookies and other tracking technologies.</li>
          </ul>

          <h3 className="text-2xl  mt-6">
            2. Use of Information
          </h3>
          <p className="mt-2">
            We may use the information we collect for the following purposes:
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li>To respond to your inquiries and requests.</li>
            <li>To improve our website and services.</li>
            <li>To personalize your experience on the website.</li>
            <li>To send you marketing and promotional materials.</li>
          </ul>

          <h3 className="text-2xl  mt-6">
            3. Sharing of Information
          </h3>
          <p className="mt-2">
            We may share your information with third-party service providers who help us operate our website and deliver our services. These service providers are contractually obligated to keep your information confidential and secure.
          </p>
          <p className="mt-2">
            We may also share your information if we are required to do so by law.
          </p>
          <p className="mt-2">
            We may also share your information with our affiliates, subsidiaries, and other business partners to provide them with services and products that are of interest to them.
          </p>

          <h3 className="text-2xl  mt-6">
            4. Disclosure of Information
          </h3>
          <p className="mt-2">
            We may disclose your information to third parties for the following reasons:
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li>To comply with legal obligations.</li>
            <li>To protect our rights and property.</li>
            <li>To investigate fraud and abuse.</li>
            <li>To protect the safety of our users and the public.</li>
          </ul>

          <h3 className="text-2xl mt-6">
            5. Security of Information
          </h3>
          <p className="mt-2">
            We take reasonable measures to protect your personal information from unauthorized access, disclosure, use, or alteration.
        </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
