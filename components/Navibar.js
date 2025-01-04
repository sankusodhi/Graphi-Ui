
"use client";

import Link from "next/link";
import { useState } from "react";

const Navibar = () => {
  const [isPlatformDropdownOpen, setPlatformDropdownOpen] = useState(false);
  const [isSolutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [isTalentNetworkDropdownOpen, setTalentNetworkDropdownOpen] = useState(false);

  const toggleDropdown = (menu) => {
    if (menu === "platform") {
      setPlatformDropdownOpen((prevState) => !prevState);
    } else if (menu === "solutions") {
      setSolutionsDropdownOpen((prevState) => !prevState);
    } else if (menu === "resources") {
      setResourcesDropdownOpen((prevState) => !prevState);
    } else if (menu === "talentNetwork") {
      setTalentNetworkDropdownOpen((prevState) => !prevState);
    }
  };

  const arrowStyle = {
    marginLeft: "8px",
    transform: "rotate(90deg)",
    transition: "transform 0.3s ease",
    display: "inline-block",
    width: 0,
    height: 0,
    borderLeft: "5px solid transparent",
    borderRight: "5px solid transparent",
    borderTop: "5px solid #fff", // White triangle
  };

  const linkStyle = "px-4 py-2 hover:bg-transparent hover:shadow-none";

  return (
    <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white flex items-center justify-between sticky top-0 z-50 border-t-8 border-pink-600 shadow-lg">
      <ul className="flex items-center">
        <li
          className="relative"
          onMouseEnter={() => toggleDropdown("platform")}
          onMouseLeave={() => toggleDropdown("platform")}
        >
          <Link href="/platform" className="hover:underline">
            Platform
          </Link>
          <span
            style={{
              ...arrowStyle,
              transform: isPlatformDropdownOpen ? "rotate(180deg)" : "rotate(90deg)",
            }}
          ></span>
          {isPlatformDropdownOpen && (
            <ul className="absolute top-full left-0 bg-white text-black rounded-lg shadow-xl overflow-hidden">
              <li className={linkStyle}>
                <Link href="/platform/option1">Platform Option 1</Link>
              </li>
              <li className={linkStyle}>
                <Link href="/platform/option2">Platform Option 2</Link>
              </li>
              <li className={linkStyle}>
                <Link href="/platform/option3">Platform Option 3</Link>
              </li>
            </ul>
          )}
        </li>

        <li
          className="relative"
          onMouseEnter={() => toggleDropdown("solutions")}
          onMouseLeave={() => toggleDropdown("solutions")}
        >
          <Link href="/solutions" className="hover:underline">
            Solutions
          </Link>
          <span
            style={{
              ...arrowStyle,
              transform: isSolutionsDropdownOpen ? "rotate(180deg)" : "rotate(90deg)",
            }}
          ></span>
          {isSolutionsDropdownOpen && (
            <ul className="absolute top-full left-0 bg-white text-black rounded-lg shadow-xl overflow-hidden">
              <li className={linkStyle}>
                <Link href="/solutions/option1">Solution Option 1</Link>
              </li>
              <li className={linkStyle}>
                <Link href="/solutions/option2">Solution Option 2</Link>
              </li>
              <li className={linkStyle}>
                <Link href="/solutions/option3">Solution Option 3</Link>
              </li>
            </ul>
          )}
        </li>

        <li
          className="relative"
          onMouseEnter={() => toggleDropdown("resources")}
          onMouseLeave={() => toggleDropdown("resources")}
        >
          <Link href="/resources" className="hover:underline">
            Resources
          </Link>
          <span
            style={{
              ...arrowStyle,
              transform: isResourcesDropdownOpen ? "rotate(180deg)" : "rotate(90deg)",
            }}
          ></span>
          {isResourcesDropdownOpen && (
            <ul className="absolute top-full left-0 bg-white text-black rounded-lg shadow-xl overflow-hidden">
              <li className={linkStyle}>
                <Link href="/resources/guide">Resource Guide</Link>
              </li>
              <li className={linkStyle}>
                <Link href="/resources/tutorial">Resource Tutorial</Link>
              </li>
              <li className={linkStyle}>
                <Link href="/resources/articles">Articles</Link>
              </li>
            </ul>
          )}
        </li>

        <li
          className="relative"
          onMouseEnter={() => toggleDropdown("talentNetwork")}
          onMouseLeave={() => toggleDropdown("talentNetwork")}
        >
          <Link href="/talent-network" className="hover:underline">
            Talent Network
          </Link>
          <span
            style={{
              ...arrowStyle,
              transform: isTalentNetworkDropdownOpen ? "rotate(180deg)" : "rotate(90deg)",
            }}
          ></span>
          {isTalentNetworkDropdownOpen && (
            <ul className="absolute top-full left-0 bg-white text-black rounded-lg shadow-xl overflow-hidden">
              <li className={linkStyle}>
                <Link href="/talent-network/option1">Option 1</Link>
              </li>
              <li className={linkStyle}>
                <Link href="/talent-network/option2">Option 2</Link>
              </li>
              <li className={linkStyle}>
                <Link href="/talent-network/option3">Option 3</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>

      <div className="ml-auto flex gap-4">
        <button className="border-2 border-white hover:bg-white hover:text-black text-white px-4 py-2 rounded-md font-medium transition">
          Hire Talent
        </button>
        <button className="bg-yellow-400 text-black px-4 py-2 rounded-md font-medium hover:bg-yellow-500 transition">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navibar;
