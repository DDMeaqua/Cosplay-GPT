import React, { useState, useEffect, useRef } from "react";
import { Textarea } from "@nextui-org/react";

export default function Gpt() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // 每当消息列表更新时，将滚动条滚动到底部
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { text: newMessage }]);
      setNewMessage("");
    }
  };

  return (
    <div className="h-full">
      <div className="flex flex-col h-screen">
        <div className="flex-1 p-1 overflow-y-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 ${index % 2 === 0 ? "text-right" : "text-left"}`}
            >
              {index % 2 !== 0 ? <img className="inline-block rounded-full mr-2" src="/chatgpt.webp" alt="" /> : ""}
              <div
                className={`inline-block px-4 py-2 ${
                  index % 2 === 0
                    ? "bg-[#43d7b4] text-white rounded-t-xl rounded-bl-xl"
                    : "bg-[#f4f6fa] text-gray-700 rounded-r-xl rounded-tl-xl"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          {/* 这个空 div 用于滚动到底部 */}
          <div ref={messagesEndRef}></div>
        </div>
        <div className="p-4 mb-36">
          <div className="flex items-center">
            <Textarea
              labelPlacement="outside"
              placeholder="请输入..."
              minRows="1"
              radius="lg"
              value={newMessage}
              onChange={handleInputChange}
            />
            <img
              src="https://cosplay-ai.gpt2338.jp/images/svg/send.svg"
              alt=""
              className="h-8 pl-2 cursor-pointer"
              onClick={handleSendMessage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
