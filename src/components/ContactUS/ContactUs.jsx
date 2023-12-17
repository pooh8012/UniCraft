import React from "react";

const ContactUs = () => {
  return (
    <div className="container pt-12 lg:pt-24 mt-24 lg:mt-36 bg-gradient-to-br from-purple-100/50 to-pink-100/10">
      <div className="text-center">
        <h1 className="text-black font-bold text-3xl lg:text-5xl px-6 md:px-10 lg:px-20 leading-snug">
          No long-term contracts. No catches. Simple.
        </h1>
        <p className="p-2 md:p-3">
          Start your 30-day free trial. Cancel anytime.
        </p>
        <button className="bg-black text-white font-semibold text-base md:text-lg lg:text-xl px-8 md:px-12 lg:px-20 py-2 md:py-3 lg:py-4 mb-4 md:mb-7 hover:bg-white border border-black rounded-md hover:text-black transition-colors duration-150 ease-in-out">
          Contact us
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
