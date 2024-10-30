"use client"
import Image from "next/image";
import React from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";
const SacredEye = () => {
  const router = useRouter()
  return (
    <section className="w-full h-auto bg-[#F8F8F8] py-12 sm:py-16 md:py-20 lg:py-24 flex items-center justify-center">
      <div className="w-full max-w-5xl relative px-4 mx-auto space-y-8 flex flex-col items-center justify-center">
        <div className="w-full rounded-3xl relative bg-black text-white py-20 sm:py-24 lg:py-24 flex flex-col items-center justify-center space-y-6 ">
          <div className="w-full rounded-3xl absolute z-40 top-0 left-0 bg-black/60 h-full" />

          <div className="w-full  z-50 flex flex-col items-center justify-center space-y-6 px-4 sm:px-8 ">
            <h1 className="font-extrabold text-white font-satoshibold text-2xl sm:text-3xl md:text-4xl lg:text-[40px]">
              Protect What Matters Most
            </h1>
            <p className="text-white font-satoshi font-medium text-sm sm:text-base md:text-lg lg:text-xl">
            {`  Empower Your Digital World with Sacred Eyes."`}
            </p>
          </div>
          <div className="w-full flex items-center justify-center pt-16">
            <Button
              handleClick={() => router.push("/waitinglist")}
              name="Join the waitlist"
              buttonClass="w-3/4 sm:w-2/3 md:w-1/3 lg:w-[20%] p-3 sm:p-4 bg-white rounded-full text-black z-50"
            />
          </div>
          <div className="lg:w-full md:w-full z-30 h-full absolute flex items-center justify-center -bottom-[54px] sm:-bottom-0 md:-bottom-[16px] lg:-bottom-[14px]">
            <Image
              src="/child.svg"
              alt="sacred-img"
              width={580}
              height={700}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SacredEye;
