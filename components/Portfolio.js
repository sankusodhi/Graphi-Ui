import React from "react";

const Portfolio = () => {
  return (
    <section className="bg-white text-black py-12 px-6 md:px-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-lg shadow-lg p-8 relative">
          {/* Logo and Name */}
          <div className="flex flex-col items-center md:items-start">
            <div className="bg-purple-800 text-white rounded-lg px-6 py-3 mb-4">
              <span className="font-bold text-lg">zepto</span>
            </div>
            <p className="font-semibold">Sanskrut Verma</p>
            <p className="text-gray-500 text-sm">Visual Design Manager</p>
          </div>

          {/* Content Section */}
          <div className="max-w-3xl md:ml-8 text-center md:text-left">
            <p className="text-gray-700 mb-6">
              Zepto has partnered with us to enhance our brand's visual identity
              through expert graphic design. This collaboration drives revenue
              growth by creating high-quality, engaging designs that resonate
              with our audience. Together, we're scaling our brand and staying
              ahead in a competitive market.
            </p>
            <a
              href="#"
              className="text-blue-600 font-medium hover:underline"
            >
              View Portfolio →
            </a>
          </div>

          {/* Pagination Dots */}
          <div className="absolute bottom-4 right-6 flex space-x-2">
            <span className="h-2 w-2 bg-blue-600 rounded-full"></span>
            <span className="h-2 w-2 bg-gray-300 rounded-full"></span>
            <span className="h-2 w-2 bg-gray-300 rounded-full"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
