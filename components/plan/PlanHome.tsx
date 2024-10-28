"use client";
import React, { useState } from "react";
import Header from "../homecomponent/Header";
// import Plans from "./Plans";
import { cn } from "@/lib/utils";

const PlanHome = () => {
  const [tab, setTab] = useState<boolean>(true);
  return (
    <section className="h-auto py-20 w-full relative">
      <Header isplan />
      <div className="h-full w-full max-w-6xl mx-auto flex flex-col items-center justify-center ">
        <div className="w-full flex items-center justify-center flex-col space-y-8 mt-16 md:mt-24 lg:mt-24">
          <div className="max-w-xl md:max-w-2xl lg:w-[52%] flex items-center justify-center flex-col">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-snug md:leading-tight text-center font-raleway text-black font-bold">
              Flexible Plans for Every Need
            </h1>
            <p className="text-[#1D1D1D99] text-base sm:text-lg md:text-xl mt-4 md:mt-6 text-center">
              Choose the Perfect Plan to Safeguard Your Family or Business –
              Protection and Control at a Price That Fits
            </p>
          </div>
          <div className="w-[50%] flex items-center justify-center">
            <div className="lg:w-[35%] p-[6px] rounded-2xl bg-white border-2 border-[#E7EBFF] gap-4 ">
              <button
                type="button"
                onClick={() => setTab(true)}
                className={cn(
                  "w-1/2 bg-white font-raleway text-black  font-medium p-2 rounded-xl transition-all text-sm sm:text-base md:text-lg",
                  {
                    "bg-[#007C4D] text-white": tab,
                  }
                )}
              >
                Montly
              </button>
              <button
                type="button"
                onClick={() => setTab(false)}
                className={cn(
                  "w-1/2 bg-white p-2 rounded-xl font-raleway text-black transition-all text-sm sm:text-base md:text-lg font-medium",
                  {
                    "bg-[#007C4D] text-white": !tab,
                  }
                )}
              >
                Yearly
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanHome;
