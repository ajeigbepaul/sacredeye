"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "../Button";
import NavModal from "../NavModal";
// import MobileNav from "../MobileNav";
import { useRouter } from "next/navigation";

const Header = ({ iscontact }: { iscontact?: boolean }) => {
  const router = useRouter();
  const [tab, setTab] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // State to manage modal visibility
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleModal = () => {
    setIsModalOpen((prev) => (prev ? !prev : true));
  };
  // const [isOpen, setIsOpen] = useState(false);
  // const toggleMenu = () => setIsOpen(!isOpen);
  // const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`absolute w-full z-50 h-auto ${
        iscontact ? "top-[6%]" : "top-[8%]"
      } `}
    >
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between">
        <div className="md:w-[15%] w-[25%]">
          <Image
            src={"/menu.svg"}
            alt="menuicon"
            height={40}
            width={40}
            className="object-contain cursor-pointer"
            onClick={handleModal}
          />
        </div>

        <div
          className="md:w-[70%] w-[50%] flex items-center justify-center -mt-6 cursor-pointer "
          onClick={() => router.replace("/")}
        >
          <Image
            src={`${iscontact ? "/contactlogo.svg" : "/logo.svg"}`}
            alt="menuicon"
            height={150}
            width={170}
            className="object-contain"
          />
        </div>
        <div className="md:w-[15%] w-[25%] flex items-center justify-end">
          <Button
            handleClick={() => router.replace("/contactus")}
            name="Contact us"
            buttonClass={`rounded-full  border-2 ${
              iscontact
                ? "text-white bg-black text-xs p-3 lg:w-[80%] w-full"
                : "text-white border-white p-3 w-[100%]"
            }  `}
          />
        </div>
        {/* Show the toggle button on both mobile and tablet (small to medium screens) */}
        {/* <button
          onClick={toggleMenu}
          className="text-neutral-400 hover:text-white focus:outline-none flex lg:hidden" // Show on small and medium screens
          aria-label="Toggle menu"
        >
          <Image
            src={"/menu.svg"}
            alt="toggle"
            className="w-6 h-6"
            width={24}
            height={24}
          />
        </button> */}
        {/* Mobile and Tablet View */}
        {/* <MobileNav isopen={isOpen} closeMenu={closeMenu} /> */}
      </div>
      {isModalOpen && (
        <NavModal
          isOpen={isModalOpen}
          setTab={setTab}
          tab={tab}
          onClose={closeModal}
        />
      )}
    </header>
  );
};

export default Header;
