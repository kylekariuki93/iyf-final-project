import React from "react";
import mine from "../../assets/mine1.png";

function AboutKyleCars() {
  return (
    <section className="bg-gray-900 w-full py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-row items-start gap-8">

        {/* Left column: text */}
        <div className="flex flex-col justify-between w-1/2">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold text-yellow-300 mb-4 leading-snug">
              The Best Luxury Car Dealership of Your Choice
            </h2>

            <p className="text-base text-gray-300 leading-relaxed mb-4">
              <strong>KyleCars.ke</strong> is a premium car dealership and management platform, designed to provide luxury car enthusiasts and dealers with a seamless experience. Whether you’re buying, selling, or customizing high-end vehicles, KyleCars.ke ensures <strong>performance, style, and excellence</strong> in every interaction. Explore the future of luxury car ownership with KyleCars.ke — where elegance meets innovation.
            </p>
          </div>

          <button className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg transition w-fit mt-4">
            Explore Now
          </button>
        </div>

        {/* Right column: image */}
        <div className="flex justify-end w-1/2">
          <img
            src={mine}
            alt="KyleCars Showroom"
            className="w-full object-cover rounded-xl shadow-xl"
          />
        </div>

      </div>
    </section>
  );
}

export default AboutKyleCars;
