import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="text-gray-700">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-center text-4xl font-bold text-gray-900 mb-8">
          Privacy Policy
        </h1>

        <div className="text-left max-w-4xl mx-auto">
          <p className="mt-4">
            Protecting Your Privacy
          </p>
          <p className="mt-2">
            Trive Risk is committed to protecting the privacy of our users. This Privacy Policy explains how we collect, use, and disclose information that we obtain through our website and services.
          </p>

          <h3 className="text-2xl mt-6">
            1. Information We Collect
          </h3>
          <p className="mt-2">
            We may collect the following information from you:
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li><strong>Personal Information:</strong> When you contact us, you may choose to provide us with your name, email address, phone number, and other details to assist us in responding to your inquiry.</li>
            <li><strong>Non-Personal Information:</strong> We may collect non-personal information about your interaction with our website, such as your IP address, browser type, and usage patterns. This is typically collected through cookies and analytics tools.</li>
          </ul>

          <h3 className="text-2xl mt-6">
            2. Use of Information
          </h3>
          <p className="mt-2">
            We may use the collected information to:
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li>Provide and improve our services.</li>
            <li>Respond to your inquiries and requests.</li>
            <li>Analyze website usage to enhance user experience.</li>
            <li>Send marketing and promotional communications (with your consent).</li>
          </ul>

          <h3 className="text-2xl mt-6">
            3. Sharing of Information
          </h3>
          <p className="mt-2">
            We do not sell or rent your personal information. However, we may share your information:
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li>With trusted third-party service providers who assist us in delivering our services (e.g., hosting, analytics).</li>
            <li>To comply with legal obligations, such as court orders or legal processes.</li>
            <li>To protect our rights, safety, and property, or those of our users and the public.</li>
          </ul>

          <h3 className="text-2xl mt-6">
            4. Security of Information
          </h3>
          <p className="mt-2">
            We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or misuse. However, no system is completely secure, and we cannot guarantee the absolute security of your information.
          </p>

          <h3 className="text-2xl mt-6">
            5. Your Rights and Choices
          </h3>
          <p className="mt-2">
            You have the right to:
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li>Access, update, or delete your personal information.</li>
            <li>Opt out of receiving marketing communications by following the instructions provided in our emails.</li>
          </ul>

          <h3 className="text-2xl mt-6">
            6. Changes to This Privacy Policy
          </h3>
          <p className="mt-2">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the &quot;Effective Date&quot; will be updated accordingly. We encourage you to review this Privacy Policy periodically.
          </p>

          <h3 className="text-2xl mt-6">
            7. Contact Us
          </h3>
          <p className="mt-2">
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:contact@triverisk.com" className="text-teal-500">contact@triverisk.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
