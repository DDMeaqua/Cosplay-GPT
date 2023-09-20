import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Badge, Avatar } from "@nextui-org/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore from "swiper/core";
import { Pagination } from "swiper";
import Slide from "../components/Slide";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function SwiperPage() {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleControlClick = (index) => {
    if (swiper) {
      swiper.slideTo(index);
    }
  };

  const slideData = [
    {
      id: 0,
      backgroundImg: "/bg1.png",
      name: "メイ",
      description: ["お花のガーデニングが趣味", "優しい女の子", "料理愛好家"],
      color: "text-green-600",
      bgcolor: "bg-green-100",
      btncolor: "bg-green-600",
    },
    {
      id: 1,
      backgroundImg: "/bg2.png",
      name: "猫フクロウロボット",
      description: ["未来世界探検家", "22世紀のロボット", "愛らしい"],
      color: "text-orange-600",
      bgcolor: "bg-orange-100",
      btncolor: "bg-orange-600",
    },
    {
      id: 2,
      backgroundImg: "/bg3.png",
      name: "カノン",
      description: [
        "性の健康と平等の擁護者",
        "セックスの専門家",
        "コンサルタント",
        "元AV女優",
      ],
      color: "text-violet-600",
      bgcolor: "bg-violet-100",
      btncolor: "bg-violet-600",
    },
    {
      id: 3,
      backgroundImg: "/bg4.png",
      name: "タゴール禅師",
      description: ["仏教禅宗後継者", "哲学者", "ライター"],
      color: "text-amber-600",
      bgcolor: "bg-amber-100",
      btncolor: "bg-amber-600",
    },
    {
      id: 4,
      backgroundImg: "/bg5.png",
      name: "マズロー",
      description: ["経験豊富な臨床医", "心理学者", "会話型"],
      color: "text-blue-600",
      bgcolor: "bg-blue-100",
      btncolor: "bg-blue-600",
    },
  ];

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <Swiper
          onSwiper={setSwiper}
          pagination={false}
          thumbs={{ swiper: swiper }}
          modules={[FreeMode, Thumbs]}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {slideData.map((slide, index) => (
            <SwiperSlide key={index}>
              <Slide
                key={slide.id}
                backgroundImg={slide.backgroundImg}
                name={slide.name}
                description={slide.description}
                color={slide.color}
                bgcolor={slide.bgcolor}
                btncolor={slide.btncolor}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="overflow-hidden">
        <Swiper
          onSwiper={setSwiper}
          spaceBetween={24}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
        >
          {[0, 1, 2, 3, 4].map((index) => (
            <SwiperSlide key={index}>
              <Badge
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
    </div>
  );
}
