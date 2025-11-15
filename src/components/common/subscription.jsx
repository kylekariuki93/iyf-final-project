import React from "react";
import mine from "@/assets/kyle1.png";

function SubscriptionSection() {
  return (
    <section
      className="relative w-full flex items-center justify-center"
      style={{
        minHeight: "490px",
        backgroundImage: `url(${mine})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center w-full max-w-[1200px] text-center text-[#FFD700] space-y-10 px-6">
        <h2 className="text-[4rem] md:text-[5rem] font-extrabold leading-tight">
          Enjoy Exclusive Discounts
        </h2>
        <p className="text-[2rem] md:text-[2.5rem]">On Your Next Purchase</p>
        <p className="text-[1.25rem] md:text-[1.5rem]">Subscribe to our newsletter</p>

        <form className="flex flex-row gap-20 justify-center items-center mt-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-4 rounded-lg text-black w-[320px] md:w-[350px] focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button
            type="submit"
            className="bg-black text-[#FFD700] px-10 py-4 rounded-lg shadow-xl hover:shadow-2xl hover:bg-gray-900 transition-all font-bold text-lg"
          >
            Shop Now
          </button>
        </form>
      </div>
    </section>
  );
}

export default SubscriptionSection;
