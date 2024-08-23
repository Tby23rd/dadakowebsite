import React, { useCallback } from 'react';

interface ElaborateButtonProps {
  path: string;
}

const ElaborateButton: React.FC<ElaborateButtonProps> = ({ path }) => {
    // Navigation function
    const navigate = useCallback(() => {
        window.location.href = path;
      }, [path]); // Include path in the dependency array

  return (
    <button
      onClick={navigate} // Use navigate as the event handler directly
      className="bg-teal-900 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
    >
     Elaborate
    </button>
  );
};

export default ElaborateButton;
