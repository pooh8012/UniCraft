import React from "react";
import Image1 from "../../assests/Logo.png";
import Image2 from "../../assests/Logo1.png";
import Image3 from "../../assests/Logo2.png";
import Image4 from "../../assests/Logo3.png";
import Image5 from "../../assests/Logo4.png";

const Companies = () => {
  return (
    <div className="container mx-auto md:px-20 px-5 py-10">
      <div className="flex flex-col justify-center items-center gap-3">
        <p className="text-xs md:text-sm text-[#9CA3AF]">
          Trusted By 250+ Companies
        </p>
        <div className="flex flex-wrap justify-center  items-center gap-5 md:gap-10">
          {[Image1, Image2, Image3, Image4, Image5]?.map((items, index) => {
            return (
              <img
                key={index}
                src={items}
                alt={items}
                className=" md:h-10 max-w-full"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Companies;
