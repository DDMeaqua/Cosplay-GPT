import React from "react";
import Gpt from "../components/Gpt"

export default function Chat({ onClose, name, avatar }) {
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex flex-col bg-white">
      <div className="p-2 flex items-center">
        <button onClick={onClose} className="p-2 ml-2">
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
        <div className="ml-4">
          <img src={avatar} alt={name} className="w-12 h-12 rounded-full" />
        </div>
        <div className="ml-4">
          <h2 className="text-xl font-semibold">{name}</h2>
        </div>
      </div>
      <Gpt />
    </div>
  );
}
