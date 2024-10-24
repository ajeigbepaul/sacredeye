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
    <div className="w-full h-auto grid grid-cols-1">
      <div className="h-screen w-full max-w-7xl mx-auto">
        <div className="w-full flex flex-col items-center h-full justify-end  space-y-5">
          <div className="w-full flex flex-col items-center justify-center  p-0 mt-6">
            <h1 className="font-raleway font-extrabold text-white text-[56px] lg:mt-6">
              {title}
            </h1>
            <h1 className="font-raleway font-extrabold text-white text-[54px]">
              {title2}
            </h1>
          </div>
          <p
            className={`font-satoshi lg:text-xl font-medium text-center text-white ${
              id === 1 ? "md:w-[47%]" : "md:w-[60%]"
            }`}
          >
            {description}
          </p>
          <div className="w-full flex items-center justify-center space-x-4 pt-2">
            <Button
              name="Join the waitlist"
              buttonClass="bg-white text-black rounded-full p-4 w-[15%]"
            />
            <Button
              name="Pricing"
              buttonClass="border border-white text-white rounded-full p-4 w-[15%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerInfo;
