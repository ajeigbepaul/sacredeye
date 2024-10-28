import React from "react";
// import Button from "./Button";
import Image from "next/image";

const All = () => {
  const buttonArray = [
    {
      icon: "/macosicon.svg",
      name: "MasOs",
      color: "#181818",
      bgcolor: "#ffffff",
    },
    { icon: "/iosicon.svg", name: "IOS", color: "#ffffff", bgcolor: "#181818" },
    {
      icon: "/windowsicon.svg",
      name: "Windows",
      color: "#ffffff",
      bgcolor: "#3879EA",
    },
    {
      icon: "/andriodicon.svg",
      name: "Andriod",
      color: "#ffffff",
      bgcolor: "#03CA00",
    },
  ];
  return (
    <section className="h-auto w-full flex items-center justify-center lg:py-10 md:py-14 sm:py-8 py-6">
      <div className="w-full max-w-5xl h-full grid grid-cols-1 lg:grid-cols-2  gap-2">
        <div className="w-full  flex relative items-center justify-center h-full">
          <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[88%] h-full relative">
            <div className="lg:w-full md:w-full h-full">
              <Image
                src="/all.svg"
                alt="how-img"
                width={500}
                height={700}
                className="object-contain z-30"
              />
            </div>
          </div>
        </div>

        <div className="w-full  h-full flex md:items-start items-center flex-col md:justify-start justify-center space-y-4 ">
          <h2 className="font-raleway text-black text-xl sm:text-2xl lg:text-3xl font-extrabold lg:leading-snug ">
            Available for all devices
          </h2>
          <p className="text-sm sm:text-[16px] mb-8 font-satoshi font-medium text-[#1D1D1D99] lg:w-[85%] md:text-left text-center">
            Sacred Eyes is designed to work seamlessly across all your devices,
            providing comprehensive protection no matter where you are or what
            you're using.
          </p>
          <div className="w-full h-auto grid md:grid-cols-2 grid-cols-1 gap-4 pt-14">
            {buttonArray.map((item, idx) => (
              <div
                style={{ backgroundColor: item.bgcolor }}
                className="w-full shadow-lg rounded-[8px] p-3 flex items-center justify-center space-x-2"
                key={idx}
              >
                <Image
                  src={item.icon}
                  alt="icons"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <h1
                  className="text-[16px] font-bold font-satoshi"
                  style={{ color: item.color }}
                >
                  {item.name}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default All;
