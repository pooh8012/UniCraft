import React from "react";

function Hero() {
  return (
    <div className="container mx-auto md:px-20 lg:px-28 px-5 md:mt-24 mt-8">
      <div className="flex justify-center items-center flex-col gap-4 md:gap-6 md:px-8 lg:px-20">
        <h1 className="font-extrabold font-Santoshi text-gray-700 lg:text-5xl md:text-4xl text-3xl text-center leading-snug">
          Elevate Your Presence with Seamless Design and Innovation.
        </h1>
        <p className="font-medium text-[#4B5563] text-base text-center">
          From strategic planning to digital presence, we're your dedicated
          partner in achieving solo success.
        </p>
        <button className="bg-black text-white font-semibold text-base md:text-lg px-12 py-3 md:hover:bg-white border border-black rounded-md md:hover:text-black transition-colors duration-150 ease-in-out">
          View Pricing
        </button>
      </div>
    </div>
  );
}

export default Hero;
