import React from 'react';

const ComingSoon: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6">Trive Risk</h1>
        <p className="text-xl mb-6">
          We&#39;re working hard to bring you a cutting-edge platform to help your business navigate risks and stay resilient.
        </p>
        <p className="text-lg mb-10">Launching Soon!</p>

        <div className="text-center">
          <a
            href="https://forms.gle/eM8ZNZE5znnDGkyB6" // Replace with your actual Google Form link
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-md transition duration-300"
          >
            Sign Up for Updates
          </a>
        </div>
      </div>

      
    </div>
  );
};

export default ComingSoon;
