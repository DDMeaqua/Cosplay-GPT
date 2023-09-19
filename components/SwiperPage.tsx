import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Badge, Avatar } from "@nextui-org/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore from "swiper/core";
import { Pagination } from "swiper";
import Slide from "../components/Slide";

export default function App() {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleControlClick = (index) => {
    if (swiper) {
      swiper.slideTo(index);
    }
  };

  const slideData = [
    {
      backgroundImg: "/bg1.png",
      data: "Data 1",
      description: "Description 1",
    },
    {
      backgroundImg: "/bg2.png",
      data: "Data 2",
      description: "Description 2",
    },
    {
      backgroundImg: "/bg3.png",
      data: "Data 3",
      description: "Description 3",
    },
    {
      backgroundImg: "/bg4.png",
      data: "Data 4",
      description: "Description 4",
    },
    {
      backgroundImg: "/bg5.png",
      data: "Data 5",
      description: "Description 5",
    },
  ];

  return (
    <>
      <Swiper
        onSwiper={setSwiper}
        pagination={true}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
        }}
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index}>
            <Slide
              backgroundImg={slide.backgroundImg}
              data={slide.data}
              description={slide.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center mt-0">
        <Swiper
          onSwiper={setSwiper}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
          slidesPerView={5} // 控制可见的 slide 数量
          spaceBetween={10} // 控制 slide 之间的间距
          centeredSlides={true} // 控制 slide 是否居中
        >
          {[0, 1, 2, 3, 4].map((index) => (
            <SwiperSlide key={index}>
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
                <img
                  src={`/${index + 1}.webp`}
                  alt=""
                  className="w-full h-full rounded-full cursor-pointer"
                />
              </div>
            </Badge>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
