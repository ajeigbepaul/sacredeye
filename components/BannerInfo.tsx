import React from "react";
import Button from "./Button";

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
  return (
    <div className="w-full h-auto flex justify-center items-center px-4 md:px-6 lg:px-8">
      <div className="h-screen w-full max-w-7xl mx-auto flex flex-col items-center justify-center space-y-7">
        <div className="flex flex-col items-center justify-center text-center space-y-2 px-4">
          <h1 className="font-raleway font-extrabold text-white text-3xl sm:text-4xl md:text-5xl lg:text-[56px]">
            {title}
          </h1>
          <h1 className="font-raleway font-extrabold text-white text-3xl sm:text-4xl md:text-5xl lg:text-[54px]">
            {title2}
          </h1>
        </div>
        
        <p
          className={`font-satoshi font-medium text-white text-base sm:text-lg md:text-xl text-center ${
            id === 1 ? "w-full md:w-[47%]" : "w-full md:w-[60%]"
          }`}
        >
          {description}
        </p>

        <div className="flex items-center w-full justify-center space-x-4 pt-2">
          <Button
            name="Join the waitlist"
            buttonClass="bg-white text-black rounded-full p-3 sm:p-4 w-[45%] sm:w-[35%] md:w-[20%] lg:w-[15%]"
          />
          <Button
            name="Pricing"
            buttonClass="border border-white text-white rounded-full p-3 sm:p-4 w-[45%] sm:w-[35%] md:w-[20%] lg:w-[15%]"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerInfo;
