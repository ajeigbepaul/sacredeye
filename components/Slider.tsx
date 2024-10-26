"use client";
import Image from "next/image";
import BannerInfo from "./BannerInfo";

function Slider({
  image,
  title,
  title2,
  description,
  id,
}: {
  image: string;
  title: string;
  title2: string;
  description: string;
  id: number;
}) {
  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[750px] xl:h-[850px] overflow-hidden">
      <Image
        src={image}
        alt="banner image"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
        className="w-full h-full object-cover"
        priority
      />
      <div className="absolute inset-0 flex">
        <BannerInfo title={title} title2={title2} description={description} id={id} />
      </div>
    </div>
  );
}

export default Slider;
