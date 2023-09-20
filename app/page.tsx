"use client";

import { useState } from "react";
import { Tabs, Tab, Textarea } from "@nextui-org/react";
import Dropdown from "../components/Dropdown";
import SwiperPage from "../components/SwiperPage";
import Gpt from "../components/Gpt";

export default function Home() {
  const [selected, setSelected] = useState("gpt");

  return (
    <div className="bg-gradient-to-b from-green-100 to-white fixed inset-0 p-4">
      <div className="max-w-lg mx-auto h-full flex flex-col">
        <div className="flex justify-between items-center mb-8 mt-4 px-2">
          <Tabs
            aria-label="Options"
            radius="full"
            size="lg"
            selectedKey={selected}
            onSelectionChange={(key) => setSelected(key)}
          >
            {/* 在小屏幕上更改选项卡的样式 */}
            <Tab
              key="gpt"
              title="GPTtalk"
              className="md:px-20 md:py-6 px-11 py-6"
            ></Tab>
            <Tab
              key="cos"
              title="Cosplay"
              className="md:px-20 md:py-6 px-11 py-6"
            ></Tab>
          </Tabs>
          <Dropdown />
        </div>
        {/* 对话 */}
        <div className="bg-white p-3 rounded-2xl h-full">
          {selected === "gpt" && (
						<div className="h-full">
              {/* "gpt" 显示的内容 */}
							<Gpt />
						</div>
          )}
          {selected === "cos" && (
            <div className="h-full">
              {/* "cos" 显示的内容 */}
              <SwiperPage />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
