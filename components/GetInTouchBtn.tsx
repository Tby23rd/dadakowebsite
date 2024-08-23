// GetInTouchButton.tsx

import React from 'react';
// Somewhere in your types definitions, like a custom.d.ts file or at the top of your component file
declare global {
  interface Window {
    tidioChatApi?: {
      open: () => void;
    };
  }
}

const GetInTouchButton: React.FC = () => {
  const openTidioChat = () => {
    if (window.tidioChatApi) {
      window.tidioChatApi.open();
    } else {
      console.log('Tidio chat API is not available yet.');
      // Optionally, implement a retry mechanism or a listener for when the API becomes available.
    }
  };

  return (
    <button onClick={openTidioChat} className="bg-teal-900 whitespace-nowrap hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
      Get in Touch
    </button>
  );
};

export default GetInTouchButton;
