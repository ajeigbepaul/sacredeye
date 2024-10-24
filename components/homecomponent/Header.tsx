"use client"
import Image from "next/image";
import React, { useState } from "react";
import Button from "../Button";
import NavModal from "../NavModal";

const Header = () => {
  const [tab, setTab] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // State to manage modal visibility
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleModal = () => {
    setIsModalOpen((prev) => (prev ? !prev : true));
  };
  return (
    <header className="absolute w-full z-50 h-auto top-[8%]  ">
      <div className="w-full max-w-6xl px-12 mx-auto flex items-center justify-between">
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
            name="Contact us"
            buttonClass="rounded-full w-[100%] border-2 text-white border-white p-3"
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
