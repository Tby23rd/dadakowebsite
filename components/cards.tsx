// In your Card component file

import Image from "next/image";

interface CardProps {
  imageUrl: string;
  title: string;
  techStack: string[];
  description: string; // Add this line
  path: string; // Add this line for navigation or identification purposes
  onElaborate: (path: string) => void; // Update this line to include path as an argument
}


const Card: React.FC<CardProps> = ({ imageUrl, title, techStack, description, path, onElaborate }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Image src={imageUrl} alt={title} width={500} height={500} />
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-700 text-base mb-4">Tech Stack: {techStack.join(', ')}</p>
        <p className="text-gray-600 text-sm mb-4">{description}</p> {/* Display the description */}
        <button
          onClick={() => onElaborate(path)} // Pass path to the onElaborate function
          className="bg-teal-900 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
        >
          Elaborate
        </button>
      </div>
    </div>
  );
};

export default Card;