import Image from "next/image";
import React from "react";

const Why = () => {
  const whyData = [
    {
      icon: "/pc.svg",
      title: "Parental Controls",
      descr: "Keep your children safe online with customizable filters and time limits.",
    },
    {
      icon: "/cm.svg",
      title: "Corporate Management",
      descr: "Enhance workplace productivity by managing internet usage during work hours.",
    },
    {
      icon: "/dr.svg",
      title: "Detailed Reporting",
      descr: "Gain insights into browsing activities with easy-to-read reports.",
    },
  ];

  return (
    <section className="w-full h-auto bg-white py-12 sm:py-16 md:py-20 lg:py-24 flex items-center justify-center">
      <div className="w-full max-w-5xl px-4 mx-auto space-y-12 flex flex-col items-center">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center space-y-4">
          <h6 className="font-satoshi text-[#EC844A] tracking-widest text-base sm:text-[16px] md:text-lg font-bold">
            WHY SACREDEYES?
          </h6>
          <h1 className="text-black font-raleway text-2xl sm:text-3xl md:text-4xl font-extrabold">
            Smart filtering for every need
          </h1>
          <p className="text-[#1D1D1D99] font-satoshi text-sm sm:text-base md:text-lg font-medium w-[90%] sm:w-3/4 md:w-2/3 lg:w-1/2">
            {`Whether it’s protecting your children or boosting productivity at work, Sacred Eyes has the tools you need.`}
          </p>
        </div>
        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {whyData.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center space-y-4 p-6  sm:p-8 rounded-xl bg-[#F8F8F8] h-60"
            >
              <Image
                src={item.icon}
                alt="feature icon"
                width={50}
                height={50}
                className="object-contain"
              />
              <h2 className="text-[#181818] font-raleway text-lg sm:text-xl font-bold text-center">
                {item.title}
              </h2>
              <p className="text-[#1D1D1D99] font-satoshi text-center text-sm sm:text-base w-[100%] font-medium">
                {item.descr}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
