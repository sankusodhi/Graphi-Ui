"use client";

import React from "react";

const HiringSection = () => {
  return (
    <section className="bg-blue-600 text-center py-12 px-6">
      {/* Heading */}
      <h2 className="text-white text-2xl md:text-4xl font-bold mb-8">
        Unlock your Potential to get <br /> noticed among Top 1% ventures!
      </h2>

      {/* Buttons */}
      <div className="flex justify-center space-x-4">
        <button className="bg-yellow-400 text-black font-medium px-6 py-2 rounded-md hover:bg-yellow-500">
          Book a Demo
        </button>
        <button className="bg-transparent border border-white text-white font-medium px-6 py-2 rounded-md hover:bg-white hover:text-blue-600">
          Sign up
        </button>
      </div>
    </section>
  );
};

export default HiringSection;
