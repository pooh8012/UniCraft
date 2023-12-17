import React from "react";
import logo from "../../assests/Logomark.png";
import avatar from "../../assests/Avatar.png";

const Sisyphus = () => {
  return (
    <div className="container mx-auto px-8 md:px-32 lg:px-48 xl:px-64 flex flex-col items-center justify-center mt-8 md:mt-16">
      <div className="flex flex-col items-center gap-2">
        <img className="h-6 md:h-8" src={logo} alt="Sisyphus" />
        <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">Sisyphus</h1>
      </div>
      <div>
        <h1 className="text-center p-6 md:p-10 text-base md:text-xl lg:text-2xl font-medium text-gray-700">
          We’ve been with unicraft to kick start every new project and can’t
          imagine working without it.
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <img
          className="w-16 h-16 md:w-24 md:h-24 rounded-full"
          src={avatar}
          alt={avatar}
        />
        <h1 className="font-bold mt-2 text-base md:text-lg">Candice Wu</h1>
        <p className="text-gray-400 text-xs md:text-sm">
          Product Manager, SisyphusS
        </p>
      </div>
    </div>
  );
};

export default Sisyphus;
