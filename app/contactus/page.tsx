import Header from "@/components/homecomponent/Header";
import Image from "next/image";
import React from "react";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  return (
    <section className="h-full w-full relative bg-white">
      <Header iscontact />

      <div className="w-full max-w-6xl mx-auto md:h-full h-auto">
        <div className="w-full grid md:grid-cols-2 grid-cols-1 lg:py-60 md:py-40 py-32">
          <div className="w-full">
            <ContactForm />
          </div>
          <div className="w-full relative md:flex hidden">
            <div className="w-full flex items-center justify-end">
              <div className="lg:w-[65%] md:w-[75%] h-[300px] absolute lg:-top-10 md:top-0">
                <Image
                  src={"/contactside.svg"}
                  alt="contactus"
                  width={500}
                  height={500}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="lg:w-[84%] md:w-[95%] h-full absolute lg:top-4 md:top-[10%]">
              <Image
                src={"/contactus.svg"}
                alt="contactus"
                width={600}
                height={400}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
