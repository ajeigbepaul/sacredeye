"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import NavModal from "../NavModal";
import { useRouter, usePathname } from "next/navigation";

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
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // State to manage modal visibility
  useEffect(() => {
    setTab(pathname !== "/plan"); // Directly set the tab state based on pathname
  }, [pathname]);
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleModal = () => {
    setIsModalOpen((prev) => (prev ? !prev : true));
  };

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
          className="md:w-[70%] w-[50%] flex items-center justify-center -mt-[22px] cursor-pointer "
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
        <div className="md:w-[15%] w-[25%] flex items-center justify-end">
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
