"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-10 border-t border-gray-300">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-10">
          {/* Column 1 */}
          <div>
            <h4 className="text-lg font-semibold text-yellow-600 mb-4">PLATFORM</h4>
            <ul className="space-y-2 text-sm">
              <li>Text 1</li>
              <li>Text 2</li>
              <li>Text 3</li>
              <li>Text 5</li>
              <li>Text 6</li>
            </ul>
            <h4 className="text-lg font-semibold text-yellow-600 mt-6 mb-4">YET TO BE DECIDED</h4>
            <ul className="space-y-2 text-sm">
              <li>Text 1</li>
              <li>Text 2</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-lg font-semibold text-yellow-600 mb-4">DESIGN SERVICES</h4>
            <ul className="space-y-2 text-sm">
              <li>Content Writing</li>
              <li>Graphic Design</li>
              <li>Video Production</li>
              <li>Commercial Ads</li>
              <li>Product Design</li>
              <li>Packaging Design</li>
              <li>UI-UX Design</li>
              <li>Launch a Brand</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-lg font-semibold text-yellow-600 mb-4">MARTECH SERVICES</h4>
            <ul className="space-y-2 text-sm">
              <li>Custom Web Development</li>
              <li>Performance Marketing</li>
              <li>Lead-Gen Funnel</li>
              <li>Technical SEO</li>
              <li>Market Research & Survey</li>
              <li>Social Media Marketing</li>
              <li>Campaign Planning</li>
              <li>WhatsApp/Email Marketing</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-lg font-semibold text-yellow-600 mb-4">MEDIA SERVICES</h4>
            <ul className="space-y-2 text-sm">
              <li>Media Planning & Buying</li>
              <li>Influencer Marketing</li>
              <li>Event Marketing</li>
              <li>Customer Relations</li>
            </ul>
            <h4 className="text-lg font-semibold text-yellow-600 mt-6 mb-4">TALENT NETWORK SERVICES</h4>
            <ul className="space-y-2 text-sm">
              <li>Get Hired</li>
              <li>Get Talent</li>
              <li>Evaluate Creative Talent</li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h4 className="text-lg font-semibold text-yellow-600 mb-4">RESOURCES</h4>
            <ul className="space-y-2 text-sm">
              <li>Blogs</li>
              <li>Case Studies</li>
              <li>Our Work</li>
              <li>E-books</li>
              <li>Events</li>
              <li>Creators Hub</li>
              <li>Global Designers</li>
              <li>Help Center</li>
            </ul>
          </div>

          {/* Column 6 */}
          <div>
            <h4 className="text-lg font-semibold text-yellow-600 mb-4">COMPANY</h4>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Join our team</li>
            </ul>
            <button className="mt-4 bg-blue-600 text-white font-medium px-4 py-2 rounded-md hover:bg-blue-700">
              Join Team
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center">
          {/* Address */}
          <div className="text-sm text-gray-600">
            <p className="mb-2">Address</p>
            <p className="mb-2">Please connect with us at +91-XXXXXXXXXX</p>
            <p>or Write us at EMAIL</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="fab fa-facebook"></i>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-600 mt-4 md:mt-0">
            <p>© 2024, Name Inc. All Rights Reserved.</p>
            <div className="flex space-x-2">
              <a href="#" className="hover:underline">Terms of Service</a>
              <span>|</span>
              <a href="#" className="hover:underline">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:underline">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
