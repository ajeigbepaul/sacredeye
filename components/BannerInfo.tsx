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
    // <div className="h-auto w-full max-w-7xl mx-auto flex flex-col items-center space-y-6 py-12 px-4 lg:py-52 lg:px-6 bg-orange-300">
    //   <div className="flex flex-col items-center justify-center text-center space-y-2 px-2 lg:px-4">
    //     <h1 className="font-raleway font-extrabold text-white text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight">
    //       {title}
    //     </h1>
    //     <h1 className="font-raleway font-extrabold text-white text-3xl sm:text-4xl md:text-5xl lg:text-[54px] leading-tight">
    //       {title2}
    //     </h1>
    //   </div>

    //   <p
    //     className={`font-satoshi font-medium text-white text-base sm:text-lg md:text-xl lg:text-2xl text-center ${
    //       id === 1 ? "w-full sm:w-3/4 md:w-[50%] lg:w-[47%]" : "w-full sm:w-3/4 md:w-[55%] lg:w-[60%]"
    //     }`}
    //   >
    //     {description}
    //   </p>

    //   <div className="flex items-center w-full justify-center space-x-4 pt-4">
    //     <Button
    //       name="Join the waitlist"
    //       buttonClass="bg-white text-black rounded-full p-3 sm:p-4 w-[60%] sm:w-[40%] md:w-[25%] lg:w-[20%]"
    //     />
    //     <Button
    //       name="Pricing"
    //       buttonClass="border border-white text-white rounded-full p-3 sm:p-4 w-[60%] sm:w-[40%] md:w-[25%] lg:w-[20%]"
    //     />
    //   </div>
    // </div>
    // <div className="h-auto w-full max-w-7xl mx-auto flex flex-col items-center space-y-8 px-4 py-16 sm:py-20 md:py-24 lg:py-32 xl:py-52 bg-orange-300">
    //   <div className="flex flex-col items-center text-center space-y-6 xl:space-y-10 px-2 md:px-4 lg:px-6">
    //     <h1 className="font-raleway font-extrabold text-white text-xl sm:text-3xl md:text-3xl lg:text-[56px] leading-normal">
    //       {title}
    //     </h1>
    //     <h1 className="font-raleway font-extrabold text-white text-xl sm:text-4xl md:text-3xl lg:text-[54px] leading-tight">
    //       {title2}
    //     </h1>
    //   </div>

    //   <p
    //     className={`font-satoshi font-medium text-white text-base sm:text-lg md:text-xl lg:text-2xl text-center ${
    //       id === 1
    //         ? "w-full sm:w-3/4 md:w-[50%] lg:w-[47%]"
    //         : "w-full sm:w-3/4 md:w-[55%] lg:w-[60%]"
    //     }`}
    //   >
    //     {description}
    //   </p>

    //   <div className="flex items-center w-full justify-center space-x-4 pt-6 sm:pt-8">
    //     <Button
    //       name="Join the waitlist"
    //       buttonClass="bg-white text-black rounded-full p-3 sm:p-4 w-[60%] sm:w-[40%] md:w-[25%] lg:w-[20%]"
    //     />
    //     <Button
    //       name="Pricing"
    //       buttonClass="border border-white text-white rounded-full p-3 sm:p-4 w-[60%] sm:w-[40%] md:w-[25%] lg:w-[20%]"
    //     />
    //   </div>
    // </div>
    // xl:bg-orange-300 lg:bg-red-400 md:bg-green-400 sm:bg-blue-400 bg-black
    <div className="h-screen w-full max-w-7xl mx-auto flex flex-col items-center space-y-4 px-4 py-8 sm:py-12 md:py-16  lg:py-36 xl:py-60  ">
      <div className="flex flex-col items-center text-center space-y-4 px-4 md:px-4 lg:px-6">
        <h1 className="font-raleway font-extrabold text-white text-xl sm:text-2xl md:text-3xl lg:text-[48px] xl:text-6xl leading-tight">
          {title}
        </h1>
        <h1 className="font-raleway font-extrabold text-white text-xl sm:text-2xl md:text-3xl lg:text-[48px] xl:text-6xl leading-tight">
          {title2}
        </h1>
      </div>

      <p
        className={`font-satoshi font-medium text-white text-base px-4 lg:px-0 md:px-0 sm:text-lg md:text-xl lg:text-2xl text-center ${
          id === 1
            ? "w-full sm:w-3/4 md:w-[50%] lg:w-[55%]"
            : "w-full sm:w-3/4 md:w-[55%] lg:w-[75%]"
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
