import React from "react";
import Seperator from "./Seperator";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full h-auto bg-[#007C4D]">
      <div className="w-full max-w-5xl mx-auto h-full flex flex-col items-center py-8 px-4 lg:px-0">
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between space-y-8 lg:space-y-0 h-full">
          {/* Contact Information Section */}
          <div className="w-full lg:w-[40%] h-full py-6 lg:py-10 flex flex-col items-center lg:items-start space-y-6">
            <div className="w-16 h-16 mb-6 lg:mb-2">
              <Image
                src={"/eye.svg"}
                width={64}
                height={64}
                alt="techwave-logo"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col space-y-4 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <Image src={"/mail.svg"} width={20} height={20} alt="email-icon" />
                <h2 className="text-sm lg:text-base text-white font-medium">
                  hello@sacredeyes.app
                </h2>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <Image src={"/phone.svg"} width={20} height={20} alt="phone-icon" />
                <h2 className="text-sm lg:text-base text-white font-medium">
                  +23408068097620
                </h2>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <Image src={"/location.svg"} width={20} height={20} alt="location-icon" />
                <h2 className="text-sm lg:text-base text-white font-medium">
                  Delaware, USA 🇺🇸
                </h2>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="w-full lg:w-[60%] py-6 lg:py-10">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-4 px-2">
              {/* Home Links */}
              <div className="text-white flex flex-col gap-2 mb-4 lg:mb-8">
                <p className="font-semibold">Home</p>
                <div className="flex flex-col gap-1 font-medium text-sm text-white/70 space-y-3">
                  <Link href="#">Features</Link>
                  <Link href="#">Pricing</Link>
                  <Link href="#">Contact Us</Link>
                </div>
              </div>
              {/* About Us Links */}
              <div className="text-white flex flex-col gap-2 mb-4 lg:mb-8">
                <p className="font-semibold">About Us</p>
                <div className="flex flex-col gap-1 font-medium text-sm text-white/70 space-y-3">
                  <Link href="#">Benefits</Link>
                  <Link href="#">Why Us</Link>
                  <Link href="#">FAQs</Link>
                </div>
              </div>
              {/* Socials Links */}
              <div className="text-white flex flex-col gap-2 mb-4 lg:mb-8">
                <p className="font-semibold">Socials</p>
                <div className="flex flex-col gap-1 text-sm text-white/70 font-medium space-y-3">
                  <Link href="#">LinkedIn</Link>
                  <Link href="#">Instagram</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <Seperator />

        {/* Copyright */}
        <p className="text-center text-sm lg:text-base text-white pt-4">
        © 2023 sacredeyes. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
