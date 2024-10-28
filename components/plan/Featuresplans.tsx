import Image from "next/image";
import React from "react";

const Featuresplans = () => {
  const benefitData = [
    {
      title: " Age-Based Content Restrictions",
      descr:
        "Automatically apply filters based on age groups, ensuring content is suitable for every member of the family or organization.",
    },
    {
      title: " Custom Whitelists and Blacklists",
      descr:
        "Create personalized lists of allowed and blocked websites, giving you full control over what’s accessible online.",
    },

    {
      title: "Safe Search Enforcement",
      descr:
        "Force search engines to filter out explicit content in search results, adding an extra layer of protection.",
    },
    {
      title: "Multi-User Profiles",
      descr:
        "Set up individual profiles for each user, allowing for customized settings and activity reports.",
    },
    {
      title: "Detailed Usage Reports",
      descr:
        "Generate comprehensive reports that show browsing history, time spent online, and other key metrics.",
    },
    {
      title: " Remote Access and Control",
      descr:
        "Adjust settings and monitor activity from anywhere using the Sacred Eyes mobile app or web portal.",
    },
  ];
  return (
    <section className="h-auto w-full py-12 sm:py-16 md:py-20 lg:py-24 flex items-center justify-center">
      <div className="w-full max-w-5xl px-4 mx-auto space-y-12 flex flex-col items-center">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center space-y-4">
          <h6 className="font-satoshi text-[#EC844A] tracking-widest text-base sm:text-[16px] md:text-lg font-bold">
            BENEFITS
          </h6>
          <h1 className="text-black w-[50%] font-raleway leading-snug text-xl sm:text-2xl md:text-3xl font-extrabold">
            Unleash the Full Potential of Sacred Eyes
          </h1>
          <p className="text-[#1D1D1D99] font-satoshi text-sm sm:text-base md:text-lg font-medium w-[90%] sm:w-3/4 md:w-2/3 lg:w-2/3">
            {`Sacred Eyes offers a comprehensive suite of features designed to give you total control over your digital environment.`}
          </p>
        </div>
        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {benefitData.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start justify-center space-y-2 p-4 sm:p-6 rounded-xl bg-white h-48 border border-[#E9E9EB] shadow-2xl"
            >
              <div className="w-full flex items-center space-x-2 mb-4">
                <Image
                  src={"/planicon.svg"}
                  alt="feature icon"
                  width={30}
                  height={30}
                  className="object-contain"
                />
                <h2 className="text-[#181818] w-full font-raleway text-xs sm:text-sm font-bold">
                  {item.title}
                </h2>
              </div>

              <p className="text-[#1D1D1D99] font-satoshi text-left text-xs sm:text-xs lg:w-[85%] font-medium">
                {item.descr}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featuresplans;
