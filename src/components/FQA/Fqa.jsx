import React, { useState } from "react";

const FAQs = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible",
  },
  {
    question: "Can other info be added to an invoice?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible",
  },
  {
    question: "How does billing work?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible",
  },
  {
    question: "How do I change my account email?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible",
  },
];

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 mb-4 ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between w-full text-center"
      >
        <span className="font-semibold flex  text-center">{faq.question}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <p className="mt-2 text-gray-600 ">{faq.answer}</p>}
      <div className="border-b-2 pb-2"></div>
    </div>
  );
};

const FAQSection = () => {
  return (
    <div className="p-4 md:p-6 lg:px-72 text-center">
      <h1 className="font-bold text-gray-900 text-lg md:text-xl lg:text-2xl xl:text-3xl">
        Frequently asked questions
      </h1>
      <h2 className="text-sm md:text-base lg:text-lg xl:text-xl mb-3 md:mb-4 lg:mb-6 text-gray-600 mt-1 md:mt-2">
        Everything you need to know about the product and billing.
      </h2>
      {FAQs.map((faq, index) => (
        <FAQItem key={index} faq={faq} />
      ))}
    </div>
  );
};

export default FAQSection;
