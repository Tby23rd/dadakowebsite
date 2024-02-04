// DemoButton.tsx
import Link from "next/link";

const DemoButton: React.FC=() => {

  return (
    <Link href="https://calendly.com/digitotedemo/digitote-demo">

      <div className="flex justify-center items-center  space-x-4">
        <button
          type="button"
          className="bg-primary-cyan hover:bg-primary-cyan-75 font-bold px-4 py-2 rounded-full text-white mb-2 sm:mb-0 w-40 h-12"
        >
          Book A Demo
        </button>
      </div>
    </Link>
  );
};

export default DemoButton;