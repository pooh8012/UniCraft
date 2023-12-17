import React from "react";
import twitter from "../../assests/twiiter.png";
import linkedin from "../../assests/linkedin.png";
import fb from "../../assests/fb.png";
import git from "../../assests/git.png";
import fig from "../../assests/fig.png";
import x from "../../assests/x.png";

const Footer = () => {
  return (
    <div className="border border-t-1 container mx-auto pt-8 md:pt-16 pb-6 md:pb-10 px-4 md:px-10 bg-gradient-to-br from-purple-100/50 to-pink-100/10">
      <h1 className="text-black font-bold text-lg md:text-xl lg:text-2xl">
        UniCraft
      </h1>
      <p className="text-gray-500 text-sm md:text-base lg:text-lg">
        Design amazing digital experiences that create more happiness in the
        world.
      </p>
      <p className="text-gray-400 text-xs md:text-sm lg:text-base">
        &copy; 2077 Untitled UI. All rights reserved.
      </p>
      <div className="flex justify-end items-center mt-3 md:mt-6 gap-3 md:gap-5">
        <img src={linkedin} alt="linkedin" className="h-4 md:h-6" />
        <img src={fb} alt="fb" className="h-4 md:h-6" />
        <img src={twitter} alt="twitter" className="h-4 md:h-6" />
        <img src={git} alt="git" className="h-4 md:h-6" />
        <img src={fig} alt="fig" className="h-4 md:h-6" />
        <img src={x} alt="x" className="h-4 md:h-6" />
      </div>
    </div>
  );
};

export default Footer;
