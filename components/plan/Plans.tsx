import React from "react";
import Image from "next/image";
import Button from "../Button";
// import Seperator from "../Seperator";

const Plans = () => {
  const plansData = [
    {
      icon: "/basic.svg",
      title: "Basics",
      subtitle: "Families/Home",
      buttonname: "Get Started",
      cardColor: "#ffffff",
      otherinfo: [
        "Up to 25 devices or 3,75 M requests / month",
        "20+ custom filters",
        "5 Networks",
        "3 profiles",
        "100 Allowed Domains",
        "500 Blocked Domains",
      ],
    },
    {
      icon: "/pro.svg",
      title: "Pro",
      subtitle: "Schools/Universities",
      buttonname: "Submit a request",
      cardColor: "#E3FFF4",
      otherinfo: [
        "Up to 100 devices or 7.5 M requests / month",
        "40+ custom filters",
        "10 Networks",
        "5 profiles",
        "250 Allowed Domains",
        "1000 Blocked Domains",
      ],
    },
    {
      icon: "/basic.svg",
      title: "Enterprise",
      subtitle: "Organizations",
      buttonname: "Submit a request",
      cardColor: "#ffffff",
      otherinfo: [
        "Up to 100 devices or 15 M requests / month",
        "100+ custom filters ",
        "25 Networks",
        "10 profiles",
        "500 Allowed Domains",
        "1500 Blocked Domains",
      ],
    },
  ];
  return (
    <section className="h-auto w-full relative flex py-10">
      <div className="w-full max-w-5xl mx-auto flex items-start justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {plansData.map((item, idx) => (
            <div
              key={idx}
              className={`w-full flex flex-col border border-[#E7EBFF] py-8 p-8 rounded-xl`}
              style={{ backgroundColor: item?.cardColor }}
            >
              <div className={` w-full border-b ${
                idx === 1 ? "border-[#1892644D]" : "border-[#E7EBFF]"
              } flex flex-col space-y-2 pb-4`}>
                <Image
                  src={item?.icon}
                  alt="planicon"
                  width={32}
                  height={32}
                  className="object-contain"
                />
                <h2 className="text-xl font-raleway font-bold text-black">
                  {item?.title}
                </h2>
                <p className="text-sm font-satoshi font-medium text-[#797878]">
                  {item?.subtitle}
                </p>
              </div>
              <div className="w-full space-y-4 mt-4 mb-5">
                {item?.otherinfo.map((itm, id) => (
                  <div key={id} className="flex items-center space-x-2">
                    <Image
                      src={"/check.svg"}
                      alt="planicon"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                    <h1 className="text-sm font-satoshi text-black">{itm}</h1>
                  </div>
                ))}
              </div>
              <Button
                name={item?.buttonname}
                buttonClass={`p-2 rounded-full ${
                  idx === 1
                    ? "bg-[#007C4D] text-white"
                    : "border-2 border-black "
                } w-[full]`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
