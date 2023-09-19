import React from "react";

export default function Slide({ backgroundImg, data, description }) {
  return (
      <div
        className="relative flex flex-col m-auto h-full  bg-cover bg-center rounded-3xl p-2"
      >
        <img src={backgroundImg} alt="" className="h-3/4 max-h-120" />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div>
            <h2 className="text-3xl font-bold">{data}</h2>
            <p className="text-lg">{description}</p>
          </div>
        </div>
      </div>
  );
}
