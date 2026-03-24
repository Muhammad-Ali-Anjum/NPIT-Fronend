"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
export default function Faq() {
  const [active, setActive] = useState(0);
  const faqs = [
    {
      question: "What is the application deadline?",
      answer:
        "Fall priority deadline is March 1st and regular deadline is May 1st. Spring applications close November 1st.",
    },
    {
      question: "Are online programs available?",
      answer:
        "Yes, we offer fully online and hybrid programs with the same academic standards as on-campus courses.",
    },
    {
      question: "Can I transfer credits?",
      answer:
        "We accept up to 60 transfer credits from accredited institutions after transcript evaluation.",
    },
    {
      question: "How do I apply for financial aid?",
      answer:
        "Complete your FAFSA form along with your admission application. Our team responds within 2–3 weeks.",
    },
  ];
  return (
    <section className="bg-[#282460] py-24">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-[#F69322] mx-auto mt-6 rounded-full"></div>
          <p className="text-gray-300 mt-6 text-lg">
            Everything you need to know.
          </p>
        </div>
        {/* Accordion */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden bg-white shadow-lg"
            >
              {/* Button */}
              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className={`w-full flex justify-between items-center px-8 py-6 text-left transition-all duration-300
                ${
                  active === index
                    ? "bg-[#F69322] text-white"
                    : "bg-white text-[#282460] hover:bg-gray-100"
                }`}
              >
                <span className="font-semibold text-lg">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    active === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Content */}
              <div
                className={`transition-all duration-500 overflow-hidden ${
                  active === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 py-6 text-gray-600 bg-white">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}