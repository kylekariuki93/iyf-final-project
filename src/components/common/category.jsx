import React from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import cat1 from "@/assets/cat1.png";
import cat2 from "@/assets/cat2.png";
import cat3 from "@/assets/cat3.png";
import cat4 from "@/assets/cat4.png";
import cat5 from "@/assets/cat5.png";
import cat6 from "@/assets/cat6.png";
import cat7 from "@/assets/cat7.png";
import cat8 from "@/assets/cat8.png";

const cars = [
  { id: 1, name: "Rolls-Royce Phantom", image: cat1, originalPrice: "$600,000", price: "$550,000" },
  { id: 2, name: "BMW M5 Competition", image: cat2, originalPrice: "$130,000", price: "$120,000" },
  { id: 3, name: "Range Rover Autobiography", image: cat3, originalPrice: "$220,000", price: "$200,000" },
  { id: 4, name: "Range Rover Vogue", image: cat4, originalPrice: "$200,000", price: "$180,000" },
  { id: 5, name: "Toyota Prado 150", image: cat5, originalPrice: "$100,000", price: "$90,000" },
  { id: 6, name: "Lexus LX 600", image: cat6, originalPrice: "$170,000", price: "$160,000" },
  { id: 7, name: "Lexus RX 500h", image: cat7, originalPrice: "$110,000", price: "$100,000" },
  { id: 8, name: "Mercedes-Benz GLE", image: cat8, originalPrice: "$90,000", price: "$80,000" },
];

function Catalogue() {
  const handlePlusClick = (car) => {
    alert(`You clicked on ${car.name}!`);
  };

  return (
    <section className="bg-gray-900 py-16 px-6">
      <div className="max-w-[1440px] mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-white mb-4 text-center">
          Luxury Car Catalogue
        </h2>

        {/* 2-line pyramid-style descriptive text */}
        <div className="text-gray-300 text-center mb-12 mx-auto leading-tight">
          <p className="mx-auto w-full">
            Explore our exclusive collection of premium vehicles offering unmatched performance, style, and elegance
          </p>
          <p className="mx-auto w-3/5">
            Find the perfect ride that matches both luxury and power
          </p>
        </div>

        {/* Grid layout */}
        <div
          className="grid grid-cols-4 justify-center"
          style={{ columnGap: "20px", rowGap: "40px" }}
        >
          {cars.map((car) => (
            <div key={car.id} className="flex flex-col items-center">
              {/* Image container */}
              <div
                className="relative shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-[20px] overflow-hidden"
                style={{ width: "285px", height: "292px" }}
              >
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover rounded-[20px]"
                />

                {/* Clickable plus button */}
                <button
                  onClick={() => handlePlusClick(car)}
                  className="absolute bottom-3 right-3 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition z-10"
                >
                  <PlusIcon className="w-5 h-5 text-gray-900" />
                </button>
              </div>

              {/* Car name below image */}
              <h3 className="text-white font-semibold mt-3 text-center">{car.name}</h3>

              {/* Original price struck through + discounted price */}
              <div className="text-center mt-1">
                <p className="text-gray-400 line-through">{car.originalPrice}</p>
                <p className="text-white font-bold">{car.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Catalogue;
