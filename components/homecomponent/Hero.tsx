"use client";
import React from "react";
import Slider from "../Slider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { banner } from "@/data";
const Hero = () => {
  // Navigation, Pagination,
  return (
    <section className="w-full h-full scrollbar-none ">
      <div className="w-full h-full scrollbar-none">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          modules={[EffectFade, Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          className="w-full scrollbar-none h-full"
        >
          {banner.map((banr, i) => (
            <SwiperSlide key={i} className="swiperslide relative scrollbar-none">
              <Slider
                image={banr?.image}
                title={banr?.title}
                title2={banr?.title2}
                description={banr?.description}
                id={banr?.id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
