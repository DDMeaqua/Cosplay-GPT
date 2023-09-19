import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Badge, Avatar } from "@nextui-org/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore from "swiper/core";
import { Pagination } from "swiper";

export default function App() {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleControlClick = (index) => {
    if (swiper) {
      swiper.slideTo(index);
    }
  };

  return (
    <>
      <Swiper
        onSwiper={setSwiper}
        pagination={true}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
        }}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>

      <div className="flex justify-center mt-4">
        {[0, 1, 2, 3, 4].map((index) => (
          <Badge
            key={index}
            content=""
            color={activeIndex === index ? "success" : "transparent"}
            shape="circle"
            size="lg"
            placement="top-right"
          >
            <div
              className={`relative rounded-full w-24 h-24 p-1 ${
                activeIndex === index ? "border-3 border-green-300" : " "
              }`}
              onClick={() => handleControlClick(index)}
            >
              {/* <div className="relative rounded-full w-23 h-23 p-1 bg-white"> */}
              <img
                src={`/${index + 1}.webp`}
                alt=""
                className="w-full h-full rounded-full cursor-pointer"
              />
              {/* </div> */}
            </div>
          </Badge>
        ))}
      </div>
    </>
  );
}
