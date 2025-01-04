import React from "react";

const Tools = () => {
  const tools = [
    { name: "Lightroom", icon: "/adobe-lightroom-logo-FF1AAA233D-seeklogo.com.png", alt: "Lightroom Icon" },
    { name: "Illustrator", icon: "/adobe-illustrator-logo-png_seeklogo-380559.png", alt: "Illustrator Icon" },
    { name: "Photoshop", icon: "/adobe-photoshop-logo-png_seeklogo-380560.png", alt: "Photoshop Icon" },
    { name: "After Effects", icon: "/adobe-after-effects-logo-960B473FE4-seeklogo.com.png", alt: "After Effects Icon" },
    { name: "InVision", icon: "/invision-logo-png_seeklogo-273549.png", alt: "InVision Icon" },
    { name: "Figma", icon: "/figma-logo-2FD8BE3497-seeklogo.com.png", alt: "Figma Icon" },
    { name: "Notion", icon: "/notion-app-logo-009B1538E8-seeklogo.com.png", alt: "Notion Icon" },
    { name: "Canva", icon: "/canva-logo-png_seeklogo-340767.png", alt: "Canva Icon" },
    { name: "Sketch", icon: "/sketch-logo-E6FC85934D-seeklogo.com.png", alt: "Sketch Icon" },
  ];
  
  return (
    <section className="bg-amber-50 py-12 px-6 text-center">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Expertly Crafted with the Latest Tools</h2>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {tools.map((tool, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={tool.icon}
                alt={tool.alt}
                className="w-12 h-12 object-contain"
              />
              <span className="mt-2 text-sm text-gray-700">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
