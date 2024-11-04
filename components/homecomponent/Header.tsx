"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import NavModal from "../NavModal";
import { useRouter, usePathname } from "next/navigation";
import MobileNav from "../MobileNav";

const Header = ({
  iscontact,
  isplan,
}: {
  iscontact?: boolean;
  isplan?: boolean;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [tab, setTab] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // State to manage modal visibility
  const toggleMenu = () => setIsOpen(!isOpen);
  useEffect(() => {
    setTab(pathname !== "/plan"); // Directly set the tab state based on pathname
  }, [pathname]);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleModal = () => {
    setIsModalOpen((prev) => (prev ? !prev : true));
  };
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`absolute w-full z-50 h-auto ${
        iscontact
          ? "lg:top-[7%] md:top-[9%] top-[4%] "
          : isplan
          ? "md:top-[76px] top-[28px]"
          : "lg:top-[9%] md:top-[12%] top-[6%]"
      } `}
    >
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between">
        <div className="md:w-[15%] w-[25%] md:flex hidden">
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
          className="md:w-[70%] w-[50%] md:flex hidden items-center justify-center -mt-[22px] cursor-pointer "
          onClick={() => router.replace("/")}
        >
          <Image
            src={`${
              iscontact
                ? "/contactlogo.svg"
                : isplan
                ? "/contactlogo.svg"
                : "/logo.svg"
            }`}
            alt="menuicon"
            height={150}
            width={170}
            className="object-contain"
          />
        </div>

        <div className="md:w-[15%] w-[25%] md:flex hidden items-center justify-end">
          <Button
            handleClick={() => router.replace("/contactus")}
            name="Contact us"
            buttonClass={`rounded-full  border-2 ${
              iscontact
                ? "text-white bg-black text-xs p-3 lg:w-[80%] w-full"
                : isplan
                ? "text-white bg-black text-xs p-3 lg:w-[80%] w-full"
                : "text-white border-white p-3 w-[100%]"
            }  `}
          />
        </div>
      </div>
      {/* Mobile view */}
      <div className="flex items-center justify-between px-4 md:hidden">
        <div
          className="w-[30%] cursor-pointer "
          onClick={() => router.replace("/")}
        >
          <Image
            src={`/logo.svg`}
            alt="menuicon"
            height={150}
            width={170}
            className="object-contain"
          />
        </div>
        <button
          onClick={toggleMenu}
          className="text-neutral-400 hover:text-white focus:outline-none flex md:hidden z-50" // Show on small and medium screens
          aria-label="Toggle menu"
        >
          <Image
            src={"/menu.svg"}
            alt="toggle"
            className="w-8 h-8"
            width={24}
            height={24}
          />
        </button>
      </div>
      {isModalOpen && (
        <NavModal
          isOpen={isModalOpen}
          setTab={setTab}
          tab={tab}
          onClose={closeModal}
        />
      )}
      {/* Mobile and Tablet View */}
      <MobileNav isopen={isOpen} closeMenu={closeMenu} />
    </header>
  );
};

export default Header;
