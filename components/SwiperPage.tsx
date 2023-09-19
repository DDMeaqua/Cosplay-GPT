import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Badge, Avatar } from "@nextui-org/react";
import "swiper/css";
import "swiper/css/navigation"; // 引入导航样式
import "swiper/css/pagination";

// 引入所需模块
import SwiperCore from "swiper/core";
import { Pagination } from "swiper";

export default function App() {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // 处理点击图片来切换 Swiper 页
  const handleControlClick = (index) => {
    if (swiper) {
      swiper.slideTo(index);
    }
  };

  return (
    <>
      <Swiper
        onSwiper={setSwiper}
        pagination={true} // 启用分页器
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

      {/* 控制器图片 */}
      <div className="flex justify-center mt-4">
        <Badge
          content=""
          color="success"
          shape="circle"
          size="lg"
          placement="top-right"
        >
          <div
            className={`relative rounded-full w-24 h-24 p-2 ${
              activeIndex === 0 ? "bg-green-200" : "bg-white"
            }`}
            onClick={() => handleControlClick(0)}
          >
            <img
              src="/1.webp"
              alt=""
              className="w-full h-full rounded-full cursor-pointer"
            />
          </div>
        </Badge>
        <Badge
          content=""
          color="success"
          shape="circle"
          size="lg"
          placement="top-right"
        >
          <div
            className={`relative rounded-full w-24 h-24 p-2 ${
              activeIndex === 1 ? "bg-green-200" : "bg-white"
            }`}
            onClick={() => handleControlClick(1)}
          >
            <img
              src="/2.webp"
              alt=""
              className="w-full h-full rounded-full cursor-pointer"
            />
          </div>
        </Badge>
        <Badge
          content=""
          color="success"
          shape="circle"
          size="lg"
          placement="top-right"
        >
          <div
            className={`relative rounded-full w-24 h-24 p-2 ${
              activeIndex === 2 ? "bg-green-200" : "bg-white"
            }`}
            onClick={() => handleControlClick(2)}
          >
            <img
              src="/3.webp"
              alt=""
              className="w-full h-full rounded-full cursor-pointer"
            />
          </div>
        </Badge>
        <Badge
          content=""
          color="success"
          shape="circle"
          size="lg"
          placement="top-right"
        >
          <div
            className={`relative rounded-full w-24 h-24 p-2 ${
              activeIndex === 3 ? "bg-green-200" : "bg-white"
            }`}
            onClick={() => handleControlClick(3)}
          >
            <img
              src="/4.webp"
              alt=""
              className="w-full h-full rounded-full cursor-pointer"
            />
          </div>
        </Badge>
        <Badge
          content=""
          color="success"
          shape="circle"
          size="lg"
          placement="top-right"
        >
          <div
            className={`relative rounded-full w-24 h-24 p-2 ${
              activeIndex === 4 ? "bg-green-200" : "bg-white"
            }`}
            onClick={() => handleControlClick(4)}
          >
            <img
              src="/5.webp"
              alt=""
              className="w-full h-full rounded-full cursor-pointer"
            />
          </div>
        </Badge>
      </div>
    </>
  );
}
