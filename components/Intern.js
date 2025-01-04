import React from "react";

const Intern = () => {
  return (
    <section className="bg-[#0e0e29] text-white py-16 px-6 md:px-16">
      <div className="container mx-auto">
        {/* Logos Section */}
        <div className="flex items-center justify-center gap-6 flex-wrap mb-12">
          <img src="/F1-X_Theme_Park-logo-EFB17A57E1-seeklogo.com.png" alt="Park+" className="w-20 h-auto" />
          <img src="/piramal-group-logo-png_seeklogo-338835.png" alt="Piramal" className="w-20 h-auto" />
          <img src="/Adani-logo-4080B4FF8B-seeklogo.com.png" alt="Adani" className="w-20 h-auto" />
          <img src="/24-7-group-logo-0A902FC1BC-seeklogo.com.png" alt="RVshare" className="w-20 h-auto" />
          <img src="/apollo-tyres-logo-2A0E76623A-seeklogo.com.png" alt="Apollo 24|7" className="w-20 h-auto" />

        </div>

        {/* Case Study Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Section */}
          <div className="max-w-lg text-center md:text-left">
            <span className="text-yellow-400 font-medium mb-2 block">
              FEATURED CASE STUDY
            </span>
            <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-6">
              "Reimagining a Legacy: Redefining Top's India Brand Identity and
              Strategy for the Modern Consumer"
            </h2>
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
              <div>
                <span className="text-green-400 text-4xl font-bold">250%</span>
                <p className="text-gray-400">Increase in Click Rate</p>
              </div>
              <div>
                <span className="text-green-400 text-4xl font-bold">192k+</span>
                <p className="text-gray-400">Leads Generated with Creatives</p>
              </div>
            </div>
            <a
              href="#"
              className="inline-block text-blue-400 font-medium hover:underline"
            >
              Read Case Study →
            </a>
          </div>

          {/* Right Section */}
          <div className="mt-10 md:mt-0">
            <img
              src="Screenshot from 2025-01-03 18-37-05.png"
              alt="Case Study Image"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intern;
