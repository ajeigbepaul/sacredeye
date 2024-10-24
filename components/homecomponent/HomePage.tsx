import Image from "next/image";
import React from "react";
import Hero from "./Hero";
import Header from "./Header";

const HomePage = () => {
  return (
    <div className="relative h-full no-scrollbar">
      <Header/>
      <Hero />
    </div>
  );
};

export default HomePage;
