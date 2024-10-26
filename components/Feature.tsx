import React from "react";
import Button from "./Button";
import Image from "next/image";

const Feature = () => {
  return (
    <section className="h-auto w-full flex items-center justify-center bg-[#F8F8F8] py-24">
      <div className="w-full max-w-5xl h-full grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
        <div className="w-full h-full flex items-center flex-col justify-center space-y-7 text-center lg:text-left">
          <h2 className="font-raleway text-black text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight lg:leading-snug">
            Guard what matters most and Stay in Control
          </h2>
          <p className="text-base sm:text-lg font-satoshi font-medium text-[#1D1D1D99]">
            Threat protection and content filtering should be easy. Sacred Eyes
            offers powerful tools to filter content, manage screen time, and
            monitor activity, giving you peace of mind and control over what
            matters most.
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
                src="/feature.svg"
                alt="feature-img"
                width={400}
                height={700}
                className="object-contain z-30"
              />
            </div>
            <div className="absolute -left-10 sm:-left-14 lg:-left-20 bottom-6 z-40 w-28 sm:w-36 lg:w-48 h-20 sm:h-28 lg:h-32">
              <Image
                src="/frame1.png"
                alt="frame1"
                width={200}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="absolute -right-16 sm:-right-28 md:-right-6 lg:-right-36 -top-6 z-40 w-40 sm:w-52 lg:w-60 h-24 sm:h-32 lg:h-36">
              <Image
                src="/frame2.png"
                alt="frame2"
                width={300}
                height={100}
                className="object-contain"
              />
            </div>
            <div className="absolute -bottom-6 sm:-bottom-8 lg:-bottom-10 -right-6 sm:-right-8 md:right-16 lg:-right-10 z-0 w-16 sm:w-20 lg:w-24 h-10 sm:h-12 lg:h-16">
              <Image
                src="/dots.svg"
                alt="dots"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
