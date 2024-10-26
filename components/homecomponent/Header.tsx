"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "../Button";
import NavModal from "../NavModal";
import MobileNav from "../MobileNav";
import { useRouter } from "next/navigation";

const Header = ({iscontact}:{iscontact?:boolean}) => {
  const router = useRouter()
  const [tab, setTab] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // State to manage modal visibility
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleModal = () => {
    setIsModalOpen((prev) => (prev ? !prev : true));
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="absolute w-full z-50 h-auto top-[8%]  ">
      <div className="w-full max-w-7xl px-8 mx-auto lg:flex hidden items-center justify-between">
        <div className="w-[15%]">
          <Image
            src={"/menu.svg"}
            alt="menuicon"
            height={50}
            width={50}
            className="object-contain cursor-pointer"
            onClick={handleModal}
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
            handleClick={()=>router.replace("/contactus")}
            name="Contact us"
            buttonClass={`rounded-full w-[100%] border-2 ${iscontact ? "text-white bg-black":"text-white border-white"}  p-3`}
          />
        </div>
        {/* Show the toggle button on both mobile and tablet (small to medium screens) */}
        <button
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
        </button>
        {/* Mobile and Tablet View */}
        <MobileNav isopen={isOpen} closeMenu={closeMenu} />
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
