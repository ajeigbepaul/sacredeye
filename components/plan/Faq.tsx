import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const Faq = () => {
  return (
    <section className="h-auto w-full py-12 sm:py-16 md:py-20 lg:py-24 flex items-center justify-center">
      <div className="w-full max-w-4xl px-4 mx-auto space-y-12 flex flex-col items-center">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center space-y-4 w-full">
          <h1 className="text-black w-[100%] font-raleway leading-snug text-xl sm:text-2xl md:text-[42px] font-extrabold">
            Frequently Asked Questions
          </h1>
          <p className="text-[#636D79] font-satoshi text-sm sm:text-base md:text-lg font-medium w-[90%] sm:w-3/4 md:w-2/3 lg:w-2/3">
            {`Got Questions? We've Got Answers`}
          </p>
        </div>
        <div className="w-full">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, idx) => (
              <AccordionItem key={idx} value={item.question}>
                <AccordionTrigger className="text-[#333333] font-bold font-satoshi md:text-lg text-[14px] text-left ">{item?.question}</AccordionTrigger>
                <AccordionContent className="text-[#1D1D1D99] md:text-sm text-xs">{item?.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
const faqData = [
  {
    question: "What is Sacred Eyes and how does it work?",
    answer:
      "Sacred Eyes is a web filtering tool that helps manage internet usage by blocking inappropriate content.",
  },
  {
    question: "Can I customize the websites that are blocked or allowed?",
    answer:
      "Yes, users can customize the settings to block or allow specific websites as per their preferences.",
  },
  {
    question: "How do I set time limits for internet usage?",
    answer:
      "You can set time limits through the application settings, allowing you to manage daily usage effectively.",
  },
  {
    question: "Is Sacred Eyes compatible with all devices?",
    answer:
      "Sacred Eyes is designed to work on various devices, including desktops, tablets, and smartphones.",
  },
  {
    question: "How does Sacred Eyes protect my data and privacy?",
    answer:
      "Sacred Eyes employs encryption and strict privacy policies to ensure that user data is protected.",
  },
];
export default Faq;
