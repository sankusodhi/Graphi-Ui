import React from "react";

const CreativeSection = () => {
  const cards = [
    {
      title: "Hire Us or On-board Top 1% Creative Talent ✨",
      description:
        "Collaborate with our expert team for tailored, high-quality designs aligned with your brand's goals, or onboard top creative talent for fresh perspectives. Our flexible approach ensures impactful, client-focused solutions that resonate with your audience.",
      button: "Hire Designers",
      img: "image copy 2.png",
    },
    {
      title: "Creatives that Drives Revenue 💸",
      description:
        "Strategically crafted concepts that captivate engagement and boost conversions to maximize profitability.",
      button: "Know more",
      img: "image copy 3.png",
    },
    {
      title: "Top-notch quality, consistently delivered with excellence 🤩",
      description:
        "Scale your content with precisely crafted visuals that ensure consistency and lasting impact, seamlessly aligning with your brand to create engaging, resonant results.",
      button: "Know more",
      img: "image.png",
    },
  ];

  return (
    <section className="bg-blue-900 py-12 px-6 md:px-16 text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          How we will benefit you.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">{card.title}</h3>
                <p className="text-gray-600 mb-4">{card.description}</p>
                <a
                  href="#"
                  className="text-blue-500 font-medium hover:underline"
                >
                  {card.button} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativeSection;
