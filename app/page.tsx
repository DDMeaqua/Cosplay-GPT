"use client";

import { useState } from "react";
import { Tabs, Tab, Textarea } from "@nextui-org/react";

export default function Home() {
  const [selected, setSelected] = useState("gpt");

  return (
    <div className="bg-gradient-to-b from-green-100 to-white h-screen fixed inset-0 py-4">
      <div className="max-w-lg mx-auto h-full">
        <div className="flex justify-between items-center mb-12 mt-4 px-4">
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
        {/* 对话 */}
        <div className="bg-white p-4 rounded-2xl h-full relative">
          {selected === "gpt" && (
            <div>
              {/* "gpt" 显示的内容 */}
              <p>这是 GPTtalk 内容</p>
            </div>
          )}
          {selected === "cos" && (
            <div>
              {/* "cos" 显示的内容 */}
              <p>这是 Cosplay 内容</p>
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-between items-center mb-20">
            <Textarea
              labelPlacement="outside"
              placeholder="请输入..."
              minRows="1"
            />
            <img src="https://cosplay-ai.gpt2338.jp/images/svg/send.svg" alt="" className="h-8 pl-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
