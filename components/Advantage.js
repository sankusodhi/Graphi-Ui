import React from "react";

const Advantage = () => {
  const advantages = [
    { title: "Logo Design", description: "Craft unique and memorable logos that embody your brand's identity, leaving a lasting impression on your audience." },
    { title: "Brand Identity Design", description: "Developing complete branding elements, including color palettes, typography, and visual style guidelines." },
    { title: "Social Media Graphics", description: "Creating visually engaging graphics for social media posts, ads, stories, and banners." },
    { title: "Website and App Graphics", description: "Designing UI/UX visuals, icons, and elements for websites and mobile applications." },
    { title: "Infographics", description: "Converting complex data and information into visually appealing and easy-to-understand infographics." },
    { title: "Ad Banners", description: "Develop eye-catching ad banners optimized for digital campaigns to maximize clicks and conversions." },
    { title: "Motion Graphics and GIF's", description: "Adding engaging animations and short videos for impactful communication." },
    { title: "Brochure & Flyers", description: "Design informative and visually appealing brochures and flyers that convey your message effectively." },
    { title: "Illustration Services", description: "Producing custom illustrations tailored to enhance brand communication and storytelling." },
    { title: "Presentation Design", description: "Create compelling PowerPoint templates and pitch decks that captivate audiences and communicate your message effectively." },
    { title: "Advertising Design", description: "Designing print and digital ads, including billboards, banners, and magazine layouts, for impactful campaigns." },
    { title: "Ebook and Publication", description: "Designing layouts for ebooks, magazines, and newsletters with consistent and appealing visual aesthetics." },
    { title: "Menu Design", description: "Crafting visually appealing menus for restaurants, cafes, or events." },
    { title: "Poster and Banner Design", description: "Creating impactful posters and banners for promotions, events, or campaigns." },
    { title: "Custom Typography Design", description: "Creating unique fonts and typography tailored to brand requirements." },
    { title: "Book Cover Design", description: "Crafting visually appealing and market-relevant book covers for print and digital publications." },
    { title: "UI Icon Design", description: "Creating consistent, functional, and aesthetically pleasing icons for apps and websites." },
    { title: "Brand Asset Creation", description: "Developing a library of cohesive design assets to ensure consistent branding across platforms." },
    { title: "Logo Design", description: "Craft unique and memorable logos that embody your brand's identity, leaving a lasting impression on your audience." },
    { title: "Brand Identity Design", description: "Developing complete branding elements, including color palettes, typography, and visual style guidelines." },
    { title: "Social Media Graphics", description: "Creating visually engaging graphics for social media posts, ads, stories, and banners." },
    { title: "Website and App Graphics", description: "Designing UI/UX visuals, icons, and elements for websites and mobile applications." },
    { title: "Infographics", description: "Converting complex data and information into visually appealing and easy-to-understand infographics." },
    { title: "Ad Banners", description: "Develop eye-catching ad banners optimized for digital campaigns to maximize clicks and conversions." },
  ];

  return (
    <section className="bg-gray-100 text-gray-900 py-12 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Take Advantage</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {advantages.map((adv, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">{adv.title}</h3>
              <p className="text-gray-600">{adv.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700">
            Show Less
          </button>
        </div>
      </div>
    </section>
  );
};

export default Advantage;
