import React from 'react';
import '../app/globals.css'; // Adjust the path based on your file structure
import GetInTouchButton from '@/components/GetInTouchBtn';

const Contact=() => {

  return (
    <div className="p-6" id='contact'>
      <div className="max-w-3xl mx-auto">
        <form name="contact" method="POST" data-netlify="true" className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
          <input type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded-md" required />
          <label htmlFor="phone" className="block mt-4 text-sm font-medium text-gray-700">Phone:</label>
          <input type="tel" id="phone" name="phone" className="mt-1 p-2 w-full border rounded-md" required />
          <label htmlFor="email" className="block mt-4 text-sm font-medium text-gray-700">Email:</label>
          <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md" required />
          <label htmlFor="message" className="block mt-4 text-sm font-medium text-gray-700">Message:</label>
          <textarea id="message" name="message" className="mt-1 p-2 w-full border rounded-md" required></textarea>

          <div className="flex justify-center items-center space-x-4"> {/* Adjust flex properties as needed */}
            <button type="submit" className="bg-teal-900 whitespace-nowrap hover:bg-teal-700 text-white font-bold p-2 px-4 rounded">
              Submit
            </button>
            <GetInTouchButton />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
