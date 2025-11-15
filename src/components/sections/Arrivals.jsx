import React from "react";

const newStockItems = [
  { id: 1, name: "Luxury Sedan", image: "/assets/stock4.png" },
  { id: 2, name: "Sport Coupe", image: "/assets/stock3.png" },
  { id: 3, name: "Electric SUV", image: "/assets/stock 2.png" },
  { id: 4, name: "Convertible", image: "/assets/stock1.png" },
];

function NewStock() {
  return (
    <section className="bg-gray-900 w-full py-20 px-6 overflow-visible">
      <div className="max-w-7xl mx-auto flex items-center relative">

        {/* Left text column */}
        <div className="flex-1 flex flex-col justify-center pr-10 z-10">
          <h2 className="text-5xl font-bold text-yellow-300 mb-6">
            New Arrivals
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-sm">
            Discover our latest luxury cars freshly added to our premium stock.
            Performance, comfort, and elegance all in one ride.
            
          </p>
          <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition w-fit">
            View All
          </button>
        </div>

        {/* Right car row with bigger gap */}
        <div className="flex flex-row gap-20 flex-shrink-0 w-max overflow-visible">
          {newStockItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800 shadow-xl overflow-hidden flex-shrink-0 w-[265px] h-[400px] rounded-[5px] relative transform transition-transform duration-300 hover:-translate-y-3 hover:shadow-2xl flex flex-col"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[320px] object-cover rounded-t-[5px]"
              />
              
              {/* Name below image */}
              <div className="bg-gray-900 text-center p-4 flex-1 flex items-center justify-center">
                <h3 className="text-white font-semibold text-lg">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default NewStock;
