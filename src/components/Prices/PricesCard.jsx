import React from "react";

function PricesCard({ data, index }) {
  return (
    <div
      className={`border rounded-lg px-4 py-5 shadow-xl ${
        index === 1 ? "bg-[#1F2937]" : "bg-white"
      }`}
    >
      <div className="flex flex-col gap-3">
        <h3
          className={` ${
            index === 1 ? "text-white" : "text-black"
          } font-semibold text-lg`}
        >
          {data?.name}
        </h3>
        <p
          className={` ${
            index === 1 ? "text-white" : "text-[#6B7280]"
          } font-medium text-sm`}
        >
          {data.description}
        </p>
        <h1
          className={`font-semibold text-5xl ${
            index === 1 ? "text-white" : "text-black"
          }`}
        >
          ${data?.price} <span className=" font-medium text-sm ">/ Month</span>
        </h1>
        <button className="bg-white border border-[#4B5563] rounded-lg my-8  w-full py-3 text-[#4B5563] hover:bg-black  hover:text-white shadow-xl">
          Get Started now
        </button>
        <div className="flex flex-col gap-2">
          {data?.items?.map((item, i) => {
            return (
              <div
                key={i}
                className="flex items-center  text=[#1F2937] font-medium gap-1"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.8125 10.9376C17.1875 14.0626 14.8312 17.0051 11.525 17.6626C9.91246 17.9837 8.23974 17.7879 6.74498 17.103C5.25022 16.4182 4.00963 15.2792 3.19984 13.8483C2.39006 12.4174 2.05237 10.7674 2.23486 9.1334C2.41735 7.49938 3.11072 5.96459 4.21623 4.74756C6.48373 2.25006 10.3125 1.56256 13.4375 2.81256"
                    //stroke=#1F2937"
                    stroke={
                      index === 0
                        ? i < 2
                          ? "#1F2937"
                          : "#9CA3AF"
                        : index === 1
                        ? i < 4
                          ? "#fff"
                          : "#9CA3AF"
                        : "#000"
                    }
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.1875 9.6875L10.3125 12.8125L17.8125 4.6875"
                    stroke={
                      index === 0
                        ? i < 2
                          ? "#1F2937"
                          : "#9CA3AF"
                        : index === 1
                        ? i < 4
                          ? "#fff"
                          : "#9CA3AF"
                        : "#000"
                    }
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <p
                  className={`text-base ${
                    index === 0
                      ? i < 2
                        ? "text-[#1F2937]"
                        : "text-[#9CA3AF]"
                      : index === 1
                      ? i < 4
                        ? "text-white"
                        : "text-[#9CA3AF]"
                      : "text-black"
                  }`}
                >
                  {item}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PricesCard;
