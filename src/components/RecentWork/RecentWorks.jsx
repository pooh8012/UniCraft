import React from "react";
import Frame9 from "../../assests/Frame 9.png";
import Frame10 from "../../assests/Frame 10.png";
import Frame11 from "../../assests/Frame 11.png";
import Frame12 from "../../assests/Frame 12.png";
import Frame13 from "../../assests/Frame 13.png";
import "../../index.css";

const RecentWorks = () => {
  return (
    <div className="flex flex-col items-center mt-10 md:mt-20 mb-8 md:mb-16">
      <div className="flex flex-row  lg:justify-between md:overflow-x-hidden overflow-x-auto items-center md:justify-between gap-4 md:gap-11 max-w-full">
        {[Frame12, Frame9, Frame10, Frame11, Frame13]?.map((items, index) => {
          return (
            <img
              className="w-full  md:h-36 lg:h-96 "
              src={items}
              alt={items}
              key={index}
            />
          );
        })}
      </div>
      <button className="bg-white border-2 rounded-lg p-2 px-8 mt-8 md:mt-14 text-base md:text-lg border-gray-500 text-gray-500 font-bold">
        View recent work
      </button>
    </div>
  );
};

export default RecentWorks;
