"use client"
import Form from "@/components/Form";
import Image from "next/image";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";
const WaitingList = () => {
  const router = useRouter();
  return (
    <section className="min-h-screen w-full">
      <div className="w-full bg-white h-[12vh] items-center px-14 flex space-x-12">
        <FaArrowLeft onClick={() => router.back()} />
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => router.replace("/")}
        >
          <Image src={"/eye.svg"} alt="logo" width={40} height={40} />
          <h1 className="text-black font-inter font-bold text-lg">
            SacredEyes
          </h1>
        </div>
      </div>
      <Form />
    </section>
  );
};

export default WaitingList;
