import Header from "@/components/homecomponent/Header";
import Image from "next/image";
import React from "react";
import ContactForm from "./ContactForm";

const page = () => {
  return (
    <section className="min-h-screen w-full relative">
      <div className="w-full max-w-6xl mx-auto relative mt-14">
        <Header iscontact />
      </div>
      <div className="w-full max-w-6xl mx-auto min-h-screen">
        <div className="w-full grid grid-cols-2">
          <div className="w-full">
            <ContactForm />
          </div>
          <div className="w-full relative">
            <Image
              src={"/contactside.svg"}
              alt="contactus"
              width={250}
              height={700}
              className="contain"
            />
            <Image
              src={"/contactus.svg"}
              alt="contactus"
              width={250}
              height={400}
              className="contain absolute top-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
