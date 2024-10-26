import React from "react";
import { FaTimes } from "react-icons/fa";
import Button from "./Button";
import Image from "next/image";
// import NavLinks from "./NavLinks";

const MobileNav = ({
  closeMenu,
  isopen,
}: {
  closeMenu: () => void;
  isopen: boolean;
}) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full  z-50 transition-all duration-300 ${
        isopen ? "h-screen" : "h-0"
      } overflow-hidden bg-white`} // Ensure overflow-x and overflow-y are hidden
      style={{ overflowX: "hidden" }} // Add this style to explicitly hide horizontal scrolling
    >
      <div className="flex justify-end p-4">
        <button
          className="text-neutral-400 hover:text-black"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <FaTimes size={24} />
        </button>
      </div>
      <nav className="p-0 h-full w-full">
        <div className="h-full overflow-y-auto w-full">
          {" "}
          {/* Ensure no overflow on x-axis */}
          {/* <NavLinks /> */}
          <div className="w-full max-w-7xl px-8 mx-auto flex items-center flex-col justify-between">
            <div className="w-[15%]">
              <Image
                src={"/menu.svg"}
                alt="menuicon"
                height={50}
                width={50}
                className="object-contain cursor-pointer"
                // onClick={handleModal}
              />
            </div>

            <div className="w-[70%]  flex items-center justify-center -mt-6">
              <Image
                src={"/logo.svg"}
                alt="menuicon"
                height={200}
                width={200}
                className="object-contain "
              />
            </div>
            <div className="w-[15%]">
              <Button
                name="Contact us"
                buttonClass="rounded-full w-[100%] border-2 text-white border-white p-3"
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;
