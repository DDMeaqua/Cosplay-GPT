"use client";

import { createContext, useContext, useState } from "react";
import { Tabs, Tab, Textarea } from "@nextui-org/react";
import Dropdown from "../components/Dropdown";
import SwiperPage from "../components/SwiperPage";
import Gpt from "../components/Gpt";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export default function Home() {
  const [selected, setSelected] = useState("gpt");
  const [changetab, setChangeTab] = useState(true);
  
  const tabback = () => {
    setChangeTab(true);
  }

  return (
    <div className="bg-gradient-to-b from-green-100 to-white fixed inset-0 p-4">
      <div className="max-w-lg mx-auto h-full flex flex-col">
        {changetab ? (
          <div className="flex justify-between items-center mb-8 mt-4 px-2">
            <Tabs
              className="bg-green-200 rounded-full"
              aria-label="Options"
              variant="light"
              radius="full"
              size="lg"
              selectedKey={selected}
              onSelectionChange={(key) => setSelected(key)}
            >
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
        ) : (
          <div className="flex items-center mb-8 mt-4 px-2">
              <button className="ml-1" onClick={tabback}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
              </button>
              <div className="ml-1">
                <img
                  src="/1.webp"
                  className="w-16 h-16 rounded-full"
                />
              </div>
              <div className="ml-2">
                <h2 className="text-xl font-semibold">xxx</h2>
                <span className="text-xs">Online</span>
              </div>
          </div>
        )}

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
