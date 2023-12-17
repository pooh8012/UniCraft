import React from "react";
import img1 from "../../assests/1.png";
import img2 from "../../assests/2 (1).png";
import img3 from "../../assests/3 (1).png";
import arrow from "../../assests/Frame.png";

const HowItWorks = () => {
  return (
    <div className="container mx-auto md:px-8 px-5 mt-12">
      <div className="p-5 border shadow-xl rounded-lg">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-center mt-8">How it works</h1>
          <p className="text-[#4B5563] text-sm font-bold text-center">
            Premium designs, unlimited requests, super-fast delivery, for one
            flat monthly fee.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-evenly mt-14 mb-14 gap-8 md:gap-0">
          <div className="relative flex items-center">
            <img className="h-1/3 md:h-1/2" src={img1} alt="1" />
            <div className="md:absolute md:left-1/2 md-transform md-translate-x-1/2 md-text-center md-text-black md-top-0 md-w-72">
              <h1 className="text-4xl font-bold">Subscribe</h1>
              <p className="text-gray-500 text-xs">
                Subscribe to a plan & get instant access to your private Slack
                channel.
              </p>
            </div>
          </div>
          <img className="h-20" src={arrow} alt="arrow" />
          <div className="relative flex items-center">
            <img className="h-1/3 md:h-1/2" src={img2} alt="2" />
            <div className="md:absolute md-left-1/2 md-transform md-translate-x-1/2 md-text-center md-text-black md-top-0 md-w-72">
              <h1 className="text-4xl font-bold">Request</h1>
              <p className="text-gray-500 text-xs">
                Submit any number of requests. We'll work through them, ensuring
                consistent updates every 24-48 hours.
              </p>
            </div>
          </div>
          <img className="h-20" src={arrow} alt="arrow" />
          <div className="relative flex items-center">
            <img className="h-1/3 md:h-1/2" src={img3} alt="3" />
            <div className="md:absolute md-left-1/2 md-transform md-translate-x-1/2 md-text-center md-text-black md-top-0 md-w-72">
              <h1 className="text-4xl font-bold">Revise</h1>
              <p className="text-gray-500 text-xs">
                Need changes? We guarantee unlimited revisions until you're 200%
                satisfied.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
