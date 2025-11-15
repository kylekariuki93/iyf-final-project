import React from "react";
import heroback from "@/assets/heroback.png";
import { CheckIcon } from "@heroicons/react/24/outline";

function Features() {
  const services = [
    "Precision car valuation to ensure you know your vehicle’s true market worth",
    "Custom car modifications crafted to elevate style and performance",
    "Luxury detailing that leaves every vehicle spotless, polished, and showroom-ready",
  ];

  return (
    <section className="w-full py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 flex flex-row gap-12 items-start">

        {/* Left Image */}
        <div className="flex-shrink-0">
          <img
            src={heroback}
            alt="Luxury Car"
            className="w-[554px] h-[443px] object-cover rounded-xl shadow-xl transform transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Right Text */}
        <div className="flex flex-col items-start space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Experience the <span className="text-yellow-500">Luxury You Deserve</span>
          </h2>

          <p className="text-gray-700 text-lg">
            Elevate your vehicle into a masterpiece of style and performance. From precise valuation to bespoke modifications and immaculate detailing, we ensure every ride commands attention and admiration.
          </p>

          <ul className="space-y-4">
            {services.map((service, index) => (
              <li
                key={index}
                className="flex items-start bg-white shadow-sm rounded-lg px-4 py-2 hover:shadow-lg transition-shadow duration-300"
              >
                <CheckIcon
                  className="text-yellow-500 mt-1 mr-3 flex-shrink-0"
                  style={{ width: "5px", height: "5px" }}
                />
                <span className="text-gray-800 text-base font-medium leading-snug break-words">
                  {service}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    <section>
        

    </section>
    </section>
    
  );
}

export default Features;
