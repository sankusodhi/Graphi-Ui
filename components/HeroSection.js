
import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-[#0e0e29] text-white py-12 px-6 md:px-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Section */}
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Driving Sales and Capturing Attention Through <span className="text-yellow-400">Graphic Designs</span>
          </h1>
          <ul className="list-disc pl-5 mb-6 space-y-2">
            <li>On-board the Top 1% Design Talent.</li>
            <li>Communicate your brand's story.</li>
            <li>Impactful Marketing Collateral.</li>
          </ul>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700">
            Book a Demo
          </button>
        </div>
        <div className="mt-10 md:mt-0">
          <div className="bg-white text-black rounded-lg shadow-lg p-6 relative">
            <img
              src="image copy 3.png"
              alt="Graphic Designer"
              className="w-20 h-20 rounded-full border-2 border-yellow-400 mb-4"
            />
            <p className="font-semibold">Hire Top 1% Graphics Designers</p>
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
              <p>5.0 Rating</p>
            </div>
            <div className="absolute -top-2 -right-2 bg-pink-500 text-white px-2 py-1 rounded-full">
              <span role="img" aria-label="heart">
                ❤️
              </span>
            </div>
          </div>
        </div>

      </div>
       


      {/* Bottom Section */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <span className="text-yellow-400 text-3xl">📅</span>
          <h3 className="text-xl font-semibold mt-4">Punctuality Meets Perfection</h3>
          <p className="text-gray-400 mt-2">
            We deliver creatives, precise designs on schedule, ensuring excellence for your brand every time.
          </p>
        </div>
        <div>
          <span className="text-yellow-400 text-3xl">✨</span>
          <h3 className="text-xl font-semibold mt-4">Showcase Your Brand's Personality</h3>
          <p className="text-gray-400 mt-2">
            Whether it's minimalist elegance or bold statements, we tailor designs that resonate with your audience.
          </p>
        </div>
        <div>
          <span className="text-yellow-400 text-3xl">📈</span>
          <h3 className="text-xl font-semibold mt-4">Engage with Strategic Visuals</h3>
          <p className="text-gray-400 mt-2">
            From social media posts to digital ads, our graphics are crafted to drive engagement and action.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
