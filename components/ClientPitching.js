import React from "react";

const ClientPitching = () => {
  const testimonials = [
    {
      name: "Anik Jain",
      company: "Desir",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rating: 4,
      image:"image copy 2.png",
    },
    {
      name: "Pragya",
      company: "Mobikwik",
      text: "Vivamus lacinia odio vitae vestibulum vestibulum.",
      rating: 4,
      image:"image copy 3.png",
    },
    {
      name: "Pragya",
      company: "Mobikwik",
      text: "Curabitur cursus sagittis sapien, id auctor nulla varius non.",
      rating: 4,
      image:"image copy 4.png",
    },
    {
      name: "Pragya",
      company: "Mobikwik",
      text: "Sed quis nulla nec arcu feugiat tincidunt.",
      rating: 4,
      image:"image copy 7.png",
    },
  ];

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <span
          key={index}
          className={`${
            index < rating ? "text-blue-500" : "text-gray-300"
          } text-lg`}
        >
          ★
        </span>
      ));
  };

  return (
    <section className="bg-[#fdf8f0] py-16 px-6 md:px-16">
      <div className="container mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0e0e29] mb-12">
          Clients are Pitching about us.
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-lg shadow-sm bg-white"
            >
              {/* Rating */}
              <div className="flex mb-4">{renderStars(testimonial.rating)}</div>

              {/* Text */}
              <p className="text-gray-700 mb-4">{testimonial.text}</p>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div>
                  <p className="font-medium text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center mt-12">
          <button className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-300">
            ←
          </button>
          <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center ml-4 hover:bg-gray-800">
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientPitching;
