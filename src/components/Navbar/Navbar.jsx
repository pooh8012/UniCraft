import React, { useState } from "react";
import Hamburger from "../../assests/menu.png";
import Cancel from "../../assests/close.png";

function NAvbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-gradient-to-br from-purple-100/10 to-pink-100/50">
      <div className="container mx-auto md:px-20 px-5 md:py-10 py-5">
        <nav className="flex  md:flex-row items-center justify-between">
          <h1 className="font-Santoshi font-semibold text-lg mb-3 md:mb-0">
            UniCraft
          </h1>
          <div className="md:flex hidden md:flex-row md:items-center gap-0 md:gap-10">
            <h3 className="font-Satoshi font-semibold text-base mb-3 md:mb-0">
              How it works
            </h3>
            <h3 className="font-Santoshi font-semibold text-base mb-3 md:mb-0">
              Pricing
            </h3>
            <h3 className="font-Santoshi font-semibold text-base mb-3 md:mb-0">
              FAQ
            </h3>
          </div>
          <div
            className="cursor-pointer md:hidden block"
            onClick={() => setToggle(!toggle)}
          >
            <img
              src={toggle ? Cancel : Hamburger}
              alt={Hamburger}
              className={` ${toggle ? "w-8 h-8" : "w-10 h-10"}`}
            />
          </div>
          <button className="hidden md:block px-5 py-2 border text-[#4B5563] border-[#4B5563] rounded-md font-Santoshi">
            Contact us
          </button>
        </nav>
        <div className="md:hidden block">
          {toggle ? (
            <div className="flex flex-col gap-2">
              <h3 className="font-Satoshi font-semibold text-base mb-3 md:mb-0">
                How it works
              </h3>
              <h3 className="font-Santoshi font-semibold text-base mb-3 md:mb-0">
                Pricing
              </h3>
              <h3 className="font-Santoshi font-semibold text-base mb-3 md:mb-0">
                FAQ
              </h3>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default NAvbar;
