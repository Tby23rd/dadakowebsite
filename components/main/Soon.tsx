import React, { useState } from 'react';
import Image from 'next/image';
import '../app/globals.css'; // Adjust the path based on your file structure


const Soon = () => {
  const [email, setEmail] = useState('');


  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-teal-900 to-gray-700">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-4">Coming Soon</h1>
        <p className="text-lg text-white mb-8">We&apos;re working hard to bring you something awesome!</p>
        <Image src="/images/logo.jpg"
          width={200}
          height={200}
          alt="Dadako Logo"
          className="mx-auto w-40 animate-pulse"
        />
        <div className="mt-8">
        <form name="notify" method="POST" >
          <input
            type="email"
            placeholder="Enter your email"
            className="text-lg p-2 rounded-l-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="bg-teal-500 text-white font-bold p-4 m-2 rounded-r-lg hover:bg-teal-300 transition duration-300"
          >
            Notify Me!
          </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Soon;
