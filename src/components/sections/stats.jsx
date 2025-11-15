import React from "react";

function Stats() {
  return (
    <div
      className="relative w-11/12 max-w-7xl mx-auto flex flex-row justify-between items-center
                 shadow-2xl mt-16 z-20 backdrop-blur-md rounded-3xl overflow-hidden"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.8)", // slightly darker so rounding is more visible
        border: "3px solid #FFD700",
        padding: "60px 80px",
      }}
    >
      {/* Stat 1 */}
      <div className="flex flex-col items-center flex-1 mx-4">
        <span className="text-[#FFD700] font-extrabold drop-shadow-lg text-[20px]">
          150+
        </span>
        <span className="text-white font-semibold text-lg drop-shadow-md text-center">
          Cars Available
        </span>
      </div>

      {/* Divider */}
      <div className="w-px bg-[#FFD700] h-24 mx-4"></div>

      {/* Stat 2 */}
      <div className="flex flex-col items-center flex-1 mx-4">
        <span className="text-[#FFD700] font-extrabold drop-shadow-lg text-[20px]">
          25+
        </span>
        <span className="text-white font-semibold text-lg drop-shadow-md text-center">
          Brands
        </span>
      </div>

      {/* Divider */}
      <div className="w-px bg-[#FFD700] h-24 mx-4"></div>

      {/* Stat 3 */}
      <div className="flex flex-col items-center flex-1 mx-4">
        <span className="text-[#FFD700] font-extrabold drop-shadow-lg text-[20px]">
          10K+
        </span>
        <span className="text-white font-semibold text-lg drop-shadow-md text-center">
          Happy Clients
        </span>
      </div>

      {/* Divider */}
      <div className="w-px bg-[#FFD700] h-24 mx-4"></div>

      {/* Stat 4 */}
      <div className="flex flex-col items-center flex-1 mx-4">
        <span className="text-[#FFD700] font-extrabold drop-shadow-lg text-[20px]">
          260+
        </span>
        <span className="text-white font-semibold text-lg drop-shadow-md text-center">
          Variants Available
        </span>
      </div>
    </div>
  );
}

export default Stats;

