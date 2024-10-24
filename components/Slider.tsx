"use client";
import Image from "next/image";
import BannerInfo from "./BannerInfo";
// import { useState } from "react";

function Slider({
  image,
  title,
  title2,
  description,
  id,
}: {
  image: string;
  title: string;
  title2:string;
  description: string;
  id:number
}) {
  // const [setLoading] = useState(true); // State to manage loading

  // const handleImageLoad = () => {
  //   setLoading(false); // Set loading to false when image loads
  // };
  return (
    <div className=" h-full relative w-full scrollbar-none">
      <Image
        src={image}
        alt="bannerimg"
        width={1020}
        height={750}
        className="w-full relative scrollbar-none h-full object-cover"
        // onLoad={handleImageLoad} // Handle image load
      />
      <div className=" absolute top-0 lg:w-full lg:h-auto grid grid-cols-1">
        <div className="w-full h-full flex items-start">
          <div className="w-full">
            <BannerInfo title={title} title2={title2} description={description} id={id} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
