import React from "react";

import PricesCard from "./PricesCard";

const Prices = () => {
  const pricesData = [
    {
      name: "Freebie",
      description:
        "Ideal for individuals who need quick access to basic features.",
      price: 0,
      items: [
        "20,000+ of PNG & SVG graphics",
        "Access to 100 million stock images",
        "Upload custom icons and fonts",
        "Unlimited Sharing",
        "Upload graphics & video in up to 4k",
        "Unlimited Projects",
        "Instant Access to our design system",
        "Create teams to collaborate on designs",
      ],
    },
    {
      name: "Professional",
      description:
        "Ideal for individuals who who need advanced features and tools for client work.",
      price: 25,
      items: [
        "20,000+ of PNG & SVG graphics",
        "Access to 100 million stock images",
        "Upload custom icons and fonts",
        "Unlimited Sharing",
        "Upload graphics & video in up to 4k",
        "Unlimited Projects",
        "Instant Access to our design system",
        "Create teams to collaborate on designs",
      ],
    },
    {
      name: "Enterprise",
      description:
        "Ideal for businesses who need personalized services and security for large teams. ",
      price: 100,
      items: [
        "20,000+ of PNG & SVG graphics",
        "Access to 100 million stock images",
        "Upload custom icons and fonts",
        "Unlimited Sharing",
        "Upload graphics & video in up to 4k",
        "Unlimited Projects",
        "Instant Access to our design system",
        "Create teams to collaborate on designs",
      ],
    },
  ];

  return (
    <div className="container mx-auto md:px-8 lg:px-12 xl:px-20 px-5 mt-12">
      <div className="bg-gradient-to-br mb-12 from-purple-100/50 to-pink-100/10">
        <div className="pt-8 md:pt-12 lg:pt-16 text-center">
          <h1 className="text-gray-700 font-bold text-4xl md:text-5xl lg:text-6xl">
            Pricing made for collaborative support.
          </h1>
          <p className="text-gray-500 text-center px-4 md:px-32 lg:px-48 xl:px-64 mt-4 md:mt-6">
            Plain is made for your entire company. Only pay for users that
            actually message customers. Everyone else is free, forever.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-8">
          {pricesData?.map((data, index) => {
            return (
              <PricesCard key={index} index={index} data={data} className="" />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Prices;
