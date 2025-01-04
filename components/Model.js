
"use client";

import React from "react";

const Model = () => {
  return (
    <section className="bg-[#0e0e29] text-white py-16 px-6 md:px-16">
      {/* Top Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          How we are best for your business.
        </h2>
        <div className="flex flex-wrap justify-center space-x-12 space-y-4 mt-8">
          <div>
            <h3 className="text-2xl font-bold">$10M+</h3>
            <p className="text-gray-400">Revenue for Clients</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">1500+</h3>
            <p className="text-gray-400">Projects Delivered</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">10k+</h3>
            <p className="text-gray-400">Expert Designers</p>
          </div>
        </div>
      </div>

      <hr className="border-gray-700 mb-12" />

      {/* Bottom Section */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Explore Perfect needs with us.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {/* Campaign Planning */}
          <div className="bg-[#1a1a3b] rounded-lg p-6 shadow-lg">
            <img
              src="image copy 7.png"
              alt="Campaign Planning"
              className="w-full h-56 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-center">Campaign Planning</h3>
          </div>

          {/* UX/UI Design */}
          <div className="bg-[#1a1a3b] rounded-lg p-6 shadow-lg">
            <img
              src="image copy 4.png"
              alt="UX/UI Design"
              className="w-full h-56 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-center">UX/UI Design</h3>
          </div>

          {/* Advertising */}
          <div className="bg-[#1a1a3b] rounded-lg p-6 shadow-lg">
            <img
              src="image copy 5.png"
              alt="Advertising"
              className="w-full h-56 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-center">Advertising</h3>
          </div>

          {/* Rebranding */}
          <div className="bg-[#1a1a3b] rounded-lg p-6 shadow-lg">
            <img
              src="image copy 6.png"
              alt="Rebranding"
              className="w-full h-56 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-center">Rebranding</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;

