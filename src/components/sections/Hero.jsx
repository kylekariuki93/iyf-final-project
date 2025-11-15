import React from "react";

function Hero() {
  return (
    <section className="relative w-full h-screen">
      {/* Subtle overlay for readability */}
      <div className="absolute inset-0 bg-black/25"></div>

      {/* Text content */}
      <div className="relative z-10 max-w-6xl text-center px-4 flex flex-col items-center justify-center h-full">
        <h1
          className="font-extrabold tracking-wider text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight
                     drop-shadow-[0_0_15px_rgba(255,215,0,0.8)]"
          style={{ color: "#FFD700" }}
        >
          Discover Luxury Cars From All Top Brands
          <br />
          <span className="text-white">In One Place</span>
        </h1>

        <p
          className="mt-4 font-extrabold tracking-wide text-lg sm:text-xl md:text-2xl lg:text-3xl
                     drop-shadow-[0_0_10px_rgba(255,215,0,0.7)]"
          style={{ color: "#FFD700" }}
        >
          Experience the finest automobiles in comfort, style, and performance.
          <br /> Your dream car awaits!
        </p>

        <button
          className="mt-6 sm:mt-8 px-10 py-4 rounded-lg font-extrabold tracking-wide shadow-2xl
                     hover:scale-105 transition-transform text-lg sm:text-xl md:text-2xl"
          style={{
            backgroundColor: "#FFD700", // gold button
            color: "#000000",           // black text for contrast
          }}
        >
          Explore Our Collection
        </button>
      </div>
    </section>
  );
}

export default Hero;
