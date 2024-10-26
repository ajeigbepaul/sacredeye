import Image from "next/image";
import React from "react";

const Benefits = () => {
  const benefitData = [
    {
      id: "01",
      icon: "/arrow.png",
      title: " Comprehensive Content Filtering",
      descr:
        "Easily block inappropriate or harmful websites, ensuring a safe online environment for your children and employees.",
    },
    {
      id: "02",
      icon: "/arrow.png",
      title: " Real-Time Activity Monitoring",
      descr:
        "Monitor online activity across all connected devices, providing transparency and peace of mind for parents and businesses.",
    },

    {
      id: "03",
      icon: "/arrow.png",
      title: "Enhanced Security and Privacy",
      descr:
        "Protect your network from cyber threats and unauthorized access with advanced security features, keeping sensitive information secure.",
    },
    {
      id: "04",
      icon: "/arrow.png",
      title: "Comprehensive Content Filtering",
      descr:
        "Easily block inappropriate or harmful websites, ensuring a safe online environment for your children and employees.",
    },
    {
      id: "05",
      icon: "/arrow.png",
      title: "Real-Time Activity Monitoring",
      descr:
        "Monitor online activity across all connected devices, providing transparency and peace of mind for parents and businesses.",
    },
    {
      id: "06",
      icon: "/arrow.png",
      title: "Enhanced Security and Privacy",
      descr:
        "Protect your network from cyber threats and unauthorized access with advanced security features, keeping sensitive information secure.",
    },
  ];

  return (
    <section className="w-full h-auto bg-white py-12 sm:py-16 md:py-20 lg:py-24 flex items-center justify-center">
      <div className="w-full max-w-5xl px-4 mx-auto space-y-12 flex flex-col items-center">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center space-y-4">
          <h6 className="font-satoshi text-[#EC844A] tracking-widest text-base sm:text-[16px] md:text-lg font-bold">
            BENEFITS
          </h6>
          <h1 className="text-black w-[70%] font-raleway text-2xl sm:text-3xl md:text-4xl font-extrabold">
            Empower Your Digital Experience with Sacred Eyes
          </h1>
          <p className="text-[#1D1D1D99] font-satoshi text-sm sm:text-base md:text-lg font-medium w-[90%] sm:w-3/4 md:w-2/3 lg:w-1/2">
            {`Unlock Control, Security, and Peace of Mind – Tailored for Families and Businesses`}
          </p>
        </div>
        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {benefitData.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start space-y-2 p-4 sm:p-8 rounded-xl bg-[#F8F8F8] h-64"
            >
              <div className="w-full flex items-center justify-end mb-4">
                <h1 className="text-2xl md:text-3xl lg:text-[40px] tracking-wide text-[#666666] font-satoshibold font-extrabold">{item?.id}</h1>
              </div>

              <h2 className="text-[#181818] font-raleway text-xs sm:text-sm font-bold text-center">
                {item.title}
              </h2>
              <p className="text-[#1D1D1D99] font-satoshi text-left text-xs sm:text-xs w-full font-medium">
                {item.descr}
              </p>
              <div className="w-full flex items-center justify-end pt-4">
                <Image
                  src={item.icon}
                  alt="feature icon"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
