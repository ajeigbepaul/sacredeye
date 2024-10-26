import React from "react";
import Button from "./Button";
import Image from "next/image";

const How = () => {
  return (
    <section className="h-auto w-full flex items-center justify-center bg-[#F8F8F8] py-24">
      <div className="w-full max-w-5xl h-full grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
        <div className="w-full h-full flex items-center flex-col justify-center space-y-7 text-center lg:text-left">
          <h2 className="font-raleway text-black text-2xl sm:text-3xl lg:text-4xl font-bold lg:leading-snug">
            How Sacred Eyes Protects Your Digital World
          </h2>
          <p className="text-base sm:text-lg font-satoshi font-medium text-[#1D1D1D99]">
            acred Eyes simplifies online protection by seamlessly filtering
            unwanted content and managing screen time. With just a few clicks,
            you can set up personalized filters, block harmful websites, and
            monitor online activity across all your devices.
          </p>
          <div className="w-full flex justify-center lg:justify-start">
            <Button
              name="Our Features"
              buttonClass="p-4 rounded-full bg-[#007C4D] text-white w-full sm:w-1/2 md:w-1/3 lg:w-[30%]"
            />
          </div>
        </div>

        <div className="w-full flex relative items-center justify-center h-full">
          <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[75%] h-full relative">
            <div className="lg:w-full md:w-full h-full">
              <Image
                src="/hows.svg"
                alt="how-img"
                width={400}
                height={700}
                className="object-contain z-30"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default How;