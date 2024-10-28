'use client';

import React from 'react';
import ToggleGroup from '../components/ToggleGroup';


const CustomizableTerminal: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center w-[75%] gap-4 justify-between my-32">
      {/* Left side with image */}
      {/* <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="https://finchat.io/_next/image/?url=%2Fassets%2Fmarketing-pages%2Fcustomizable-mockup.png&w=3840&q=75"
          alt="Customizable Mockup"
          className="w-3/4 md:w-full"
        />
      </div> */}
      <ToggleGroup />


      {/* Right side with text */}
      <div className="w-full md:w-[60%] mt-8 md:mt-0 px-4 md:px-12">
        <h2 className="w-full text-4xl md:text-5xl font-bold mb-4">
          Your own customizable terminal.
        </h2>
        <p className="text-base md:text-base mb-4">
          <span className="bg-yellow-200 p-1">Easily track what matters to you.</span> Our
          intuitive platform gives you the flexibility to customize your experience and
          auto-save your research.
        </p>
      </div>
    </div>
  );
};

export default CustomizableTerminal;
