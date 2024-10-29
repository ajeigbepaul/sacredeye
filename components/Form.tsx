"use client";
import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    country: "",
    organization: ""
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
    <div className="w-full h-auto p-4 lg:py-12 flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl w-full bg-white rounded-3xl p-6 lg:px-12 space-y-6 lg:space-y-12"
      >
        <div className="text-left space-y-4">
          <h1 className="text-black text-2xl font-raleway lg:text-3xl font-extrabold">
            Join the Sacred Eyes Waitlist
          </h1>
          <p className="text-[#1D1D1D99] text-xs lg:text-lg font-satoshi font-medium">
            Be the first to know when Sacred Eyes launches
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          <div className="flex flex-col space-y-2">
            <label className="text-xs lg:text-sm text-black font-satoshi">First name</label>
            <input
              type="text"
              name="firstname"
              placeholder="Lucas"
              
              value={formData.firstname}
              onChange={handleInputChange}
              className="w-full p-3 lg:p-4 bg-[#F7F7F7] rounded-xl placeholder:text-sm "
              required
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-xs lg:text-sm text-black font-satoshi">Last name</label>
            <input
              type="text"
              name="lastname"
              placeholder="Eniola"
              value={formData.lastname}
              onChange={handleInputChange}
              className="w-full p-3 lg:p-4 bg-[#F7F7F7] rounded-xl placeholder:text-sm"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          <div className="flex flex-col space-y-2">
            <label className="text-xs lg:text-sm text-black font-satoshi">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Lucas.eniola@gmail.com "
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 lg:p-4 bg-[#F7F7F7] text-black rounded-xl placeholder:text-sm"
              required
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-xs lg:text-sm text-black font-satoshi">Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="0816 479 0387"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-3 lg:p-4 bg-[#F7F7F7] rounded-xl text-black placeholder:text-sm"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-xs lg:text-sm text-black font-satoshi">Select country</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleSelectChange}
            className="w-full p-3 lg:p-4 bg-[#F7F7F7] text-black rounded-xl placeholder:text-sm"
          >
            <option value="">Choose a country</option>
            <option value="NG">Nigeria</option>
            <option value="USA">United States</option>
            <option value="Canada">Canada</option>
            <option value="UK">United Kingdom</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-xs lg:text-sm text-black font-satoshi">Type of organization</label>
          <input
            type="text"
            name="organization"
            placeholder="Live streaming company"
            value={formData.organization}
            onChange={handleInputChange}
            className="w-full p-3 lg:p-4 text-black bg-[#F7F7F7] rounded-xl placeholder:text-sm"
          />
        </div>

        <div className="w-full">
          <button
            type="submit"
            className="p-3 lg:p-6 w-full bg-[#189264] rounded-xl text-white text-sm lg:text-2xl font-satoshi font-bold"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
