"use client";
import React from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";
const BannerInfo = ({
  title,
  description,
  title2,
  id,
}: {
  title: string;
  title2: string;
  description: string;
  id: number;
}) => {
  const router = useRouter();
  return (
  
    // xl:bg-orange-300 lg:bg-red-400 md:bg-green-400 sm:bg-blue-400 bg-black
    <div className="h-auto w-full max-w-7xl mx-auto flex flex-col items-center space-y-4 px-4 py-24 sm:py-12 md:py-40 lg:py-36 xl:py-60  ">
      <div className="flex flex-col items-center text-center md:space-y-4 space-y-2 px-2 md:px-4 lg:px-6">
        <h1 className="font-raleway font-extrabold text-white text-[16px] sm:text-2xl md:text-3xl lg:text-[48px] xl:text-6xl leading-tight">
          {title}
        </h1>
        <h1 className="font-raleway font-extrabold text-white text-[16px] sm:text-2xl md:text-3xl lg:text-[48px] xl:text-6xl leading-tight">
          {title2}
        </h1>
      </div>

      <p
        className={`font-satoshi font-medium text-white text-[12px] px-4 lg:px-0 md:px-0 sm:text-lg md:text-lg lg:text-2xl text-center ${
          id === 1
            ? "w-full sm:w-3/4 md:w-[60%] lg:w-[55%]"
            : "w-full sm:w-3/4 md:w-[90%] lg:w-[75%]"
        }`}
      >
        {description}
      </p>

      <div className="w-full flex items-center justify-center space-x-4 pt-4 sm:pt-6 px-4 lg:px-0 md:px-0">
        <Button
          handleClick={() => router.replace("/waitinglist")}
          name="Join the waitlist"
          buttonClass="bg-white text-black rounded-full p-3 sm:p-4 w-[60%] sm:w-[40%] md:w-[25%] lg:w-[20%]"
        />
        <Button
          handleClick={() => router.replace("/plan")}
          name="Pricing"
          buttonClass="border border-white text-white rounded-full p-3 sm:p-4 w-[60%] sm:w-[40%] md:w-[25%] lg:w-[20%]"
        />
      </div>
    </div>
  );
};

export default BannerInfo;
