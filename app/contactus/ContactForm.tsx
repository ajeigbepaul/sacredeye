"use client";
import Image from "next/image";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    country: "",
    organization: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prevData) => ({ ...prevData, country: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.firstname || !formData.lastname || !formData.email) {
      alert("Please fill in all required fields.");
      return;
    }
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="w-full h-auto p-4  flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl w-full bg-white border border-[#B8BBD2] rounded-3xl p-6 lg:px-12 space-y-6 lg:space-y-8"
      >
        <div className="space-y-4 flex items-start flex-col">
          <h1 className="text-black text-2xl lg:text-5xl font-bold">
            Get in Touch
          </h1>
          <p className="text-[#1D1D1D99] text-xs lg:text-xs">
            {`   We’re here to help! Reach out to us with any questions or support
            needs, and we’ll get back to you as soon as possible.`}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:gap-6">
          <input
            type="text"
            name="firstname"
            placeholder="Name"
            value={formData.firstname}
            onChange={handleInputChange}
            className="w-full p-2 lg:p-3 border border-[#B8BBD2] rounded-xl"
            required
          />
        </div>

        <div className="grid grid-cols-1 gap-4 lg:gap-6">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 lg:p-3 border border-[#B8BBD2] rounded-xl"
            required
          />
        </div>
        <div className="grid grid-cols-1 gap-4 lg:gap-6">
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full p-2 lg:p-3 border border-[#B8BBD2] rounded-xl"
          />
        </div>

        <div className="flex flex-col">
          <select
            name="country"
            value={formData.country}
            onChange={handleSelectChange}
            className="w-full p-2 lg:p-3  rounded-xl border border-[#B8BBD2]"
          >
            <option value="">How did you find us?</option>
            {/* <option value="USA">United States</option>
            <option value="Canada">Canada</option>
            <option value="UK">United Kingdom</option> */}
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="w-full">
          <button
            type="submit"
            className="p-2 lg:p-2 w-full bg-[#189264] rounded-xl text-white text-sm lg:text-2xl font-satoshi font-bold"
          >
            Send
          </button>
        </div>

        <div className="w-full flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <Image src={"/contactphone.svg"} width={24} height={24} alt="email-icon" />
            <div className="text-sm lg:text-base text-white font-medium">
              <h2 className="text-black text-sm font-semibold">PHONE</h2>
              <span className="text-[#007C4D] text-xs">03 5432 1234</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Image src={"/contactemail.svg"} width={24} height={24} alt="email-icon" />
            <div className="text-sm lg:text-base text-white font-medium">
              <h2 className="text-black text-sm font-semibold">EMAIL</h2>
              <span className="text-[#007C4D] text-xs">
                hello@sacredeyes.org
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
