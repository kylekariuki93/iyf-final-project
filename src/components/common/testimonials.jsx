import React, { useState } from "react";
import cust1 from "@/assets/cust1.png";
import cust2 from "@/assets/cust2.png";
import cust5 from "@/assets/cust5.png";
import cust4 from "@/assets/cust4.png";

import cat1 from "@/assets/cat1.png";
import cat2 from "@/assets/cat2.png";
import cat3 from "@/assets/cat3.png";
import cat8 from "@/assets/cat8.png";

const testimonials = [
  {
    id: 1,
    name: "Martin K.",
    carName: "Rolls-Royce Phantom",
    text: "Bro, this ride is insane! The service at KyleCars is top-notch, and the Phantom exceeded all expectations. Highly recommended!",
    customerImage: cust1,
    carImage: cat1,
  },
  {
    id: 2,
    name: "Lydia W.",
    carName: "BMW M5 Competition",
    text: "The BMW M5 is everything I dreamed of. KyleCars made the process effortless, and the team was super friendly.",
    customerImage: cust2,
    carImage: cat2,
  },
  {
    id: 3,
    name: "Jaimmy J.",
    carName: "Range Rover Vogue",
    text: "I’ve never felt so spoiled! From selection to delivery, KyleCars delivered perfection. Every detail was handled with care.",
    customerImage: cust5,
    carImage: cat3,
  },
  {
    id: 4,
    name: "Marto S.",
    carName: "Mercedes-Benz GLE",
    text: "The Mercedes is flawless, and the customer service was on point. KyleCars truly understands luxury and satisfaction.",
    customerImage: cust4,
    carImage: cat8,
  },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prevTestimonial = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  const nextTestimonial = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  const t = testimonials[current];

  return (
    <section
      className="bg-white py-12 px-6"
      style={{
        width: "1440px",
        height: "480px",
        opacity: 1,
      }}
    >
      <div className="max-w-[1440px] mx-auto h-full flex flex-col">
        <div className="flex w-full h-full items-center">
          {/* Left: title + customer info + arrows */}
          <div className="w-1/2 p-8 flex flex-col justify-start">
            {/* Section title aligned left */}
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>

            {/* Customer info */}
            <div className="flex items-center mb-4">
              <img
                src={t.customerImage}
                alt={t.name}
                style={{ width: "80px", height: "80px" }}
                className="rounded-full object-cover"
              />
              <p className="text-gray-900 font-semibold ml-4">{t.name}</p>
            </div>
            <p className="text-gray-800 text-base">{t.text}</p>
            <p className="text-gray-600 mt-2">{t.carName}</p>

            {/* Arrow buttons below testimonial */}
            <div className="flex mt-6 space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-3 text-black text-3xl focus:outline-none bg-transparent border-none"
              >
                ←
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 text-black text-3xl focus:outline-none bg-transparent border-none"
              >
                →
              </button>
            </div>
          </div>

          {/* Right: car image */}
          <div className="w-1/2 flex justify-center">
            <img
              src={t.carImage}
              alt={t.carName}
              className="w-[562px] h-[340px] rounded-md object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
