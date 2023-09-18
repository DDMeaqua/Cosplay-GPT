"use client";

import { useState } from "react";
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Home() {

	const [selected, setSelected] = useState("photos");

  return (
    <div className="bg-fixed bg-gradient-to-b from-green-100 to-white h-screen fixed inset-0 p-4">
      <div className="max-w-md mx-auto flex justify-between">
        <Tabs
          aria-label="Options"
          radius="full"
          size="lg"
          className="display: inline-block"
					selectedKey={selected}
        	onSelectionChange={setSelected}
        >
          <Tab key="photos" title="GPTtalk" className="px-16 py-6"></Tab>
          <Tab key="music" title="Cosplay" className="px-16 py-6"></Tab>
        </Tabs>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 20 20"
          >
            <path
              fill="#000"
              d="M3 11h14V9H3v2zm0 5h14v-2H3v2zM3 4v2h14V4H3z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
