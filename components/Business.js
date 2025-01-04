"use client";
import React, { useState } from "react";

const Business = () => {
  const [activeTab, setActiveTab] = useState("candidates");

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="bg-[#fdf8f0] py-16 px-6 md:px-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="w-full md:w-1/2">
          {/* Tabs */}
          <div className="flex mb-6">
            <button
              onClick={() => handleTabSwitch("candidates")}
              className={`text-lg font-semibold mr-8 ${activeTab === "candidates"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600"
                }`}
            >
              For Candidates
            </button>
            <button
              onClick={() => handleTabSwitch("enterprises")}
              className={`text-lg font-semibold ${activeTab === "enterprises"
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600"
                }`}
            >
              For Enterprises
            </button>
          </div>

          {/* Content */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#0e0e29] mb-6 leading-snug">
            Scale your Teams Faster by Hiring the{" "}
            <span className="text-blue-600">Top 1% Skilled Creative Talent.</span>
          </h2>
          <p className="text-gray-700 mb-4">
            Join an exclusive talent pool and connect with leading brands,
            searching for top creative professionals. Showcase your expertise,
            land your dream role, and redefine your career with endless
            opportunities.
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li>Get Placed with Top Brands Like Google and Amazon.</li>
            <li>Showcase Your Creative Talent to the World.</li>
            <li>Get Hired for Projects That Elevate Your Career.</li>
          </ul>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700">
            Become Talent
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <div className="bg-black text-white p-6 rounded-lg shadow-lg w-full md:w-3/4">
            {/* Card Heading */}
            <div className="flex justify-between items-center mb-4">
              <span>Active Talent</span>
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-4 bg-cover bg-center" style={{ backgroundImage: 'url("business.png")' }}>
              Kamika Kapoor <span className="block text-sm text-gray-400">UI/UX Designer</span>
            </h3>
            {/* Team Members */}
            <div className="flex mt-6">
              <div className="mr-4">
                <img
                  src="H.jpeg"
                  alt="Anik Verma"
                  className="w-14 h-14 rounded-full"
                />
                <p className="text-sm mt-2 text-center">Anik Verma</p>
              </div>
              <div className="mr-4">
                <img
                  src="image copy.png"
                  alt="Ramesh Patel"
                  className="w-14 h-14 rounded-full"
                />
                <p className="text-sm mt-2 text-center">Ramesh Patel</p>
              </div>
              <div className="mr-4">
                <img
                  src="image copy 3.png"
                  alt="Sonal Singh"
                  className="w-14 h-14 rounded-full"
                />
                <p className="text-sm mt-2 text-center">Sonal Singh</p>
              </div>
              <div>
                <img
                  src="image copy 2.png"
                  alt="Anya Roy"
                  className="w-14 h-14 rounded-full"
                />
                <p className="text-sm mt-2 text-center">Anya Roy</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;

