"use client";

import { useState } from "react";
import { Tabs, Tab, Textarea } from "@nextui-org/react";
import Dropdown from "../components/Dropdown";
import SwiperPage from "../components/SwiperPage";

export default function Home() {
  const [selected, setSelected] = useState("gpt");

  return (
    <div className="bg-gradient-to-b from-green-100 to-white h-screen fixed inset-0 py-4">
      <div className="max-w-lg mx-auto h-full">
        <div className="flex justify-between items-center mb-12 mt-4 px-2">
          <Tabs
            aria-label="Options"
            radius="full"
            size="lg"
            selectedKey={selected}
            onSelectionChange={setSelected}
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
          <button></button>
        </div>
        {/* 对话 */}
        <div className="bg-white p-4 rounded-2xl h-full relative">
          {selected === "gpt" && (
            <div>
              {/* "gpt" 显示的内容 */}
              <p>这是 GPTtalk 内容</p>
              <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-between items-center mb-24">
                <Textarea
                  labelPlacement="outside"
                  placeholder="请输入..."
                  minRows="1"
                  radius="full"
                />
                <img
                  src="https://cosplay-ai.gpt2338.jp/images/svg/send.svg"
                  alt=""
                  className="h-8 pl-2"
                />
              </div>
            </div>
          )}
          {selected === "cos" && (
            <div>
              {/* "cos" 显示的内容 */}
              <SwiperPage />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
