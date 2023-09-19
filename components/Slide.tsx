import React from "react";

export default function Slide({ backgroundImg, name, description, color }) {

  return (
    <div className={`text-${color}-600 relative flex flex-col m-auto h-full bg-cover bg-center rounded-3xl p-2`}>
      <img src={backgroundImg} alt="" className="h-3/4 max-h-120" />
      <div className="absolute inset-0">
        <h2 className="text-3xl font-bold pl-2 pt-2">{name}</h2>
      </div>
      <div className="absolute right-1 top-1 text-right text-xs flex flex-col items-end">
        {description.map((item, index) => (
          <div key={index} className={`bg-${color}-100 my-1 inline-block p-1 rounded-full`}>
            # {item}
          </div>
        ))}
      </div>
      <div className="absolute bottom-6 flex justify-between items-center justify-items-end pb-6 translate-y-1/2 backdrop-blur-sm">
          <div className={`mx-3 text-xs text-black text-ellipsis overflow-hidden break-all`}>「ナマステ。私はタゴールです。何があなたの心の平穏を乱すのですか？」</div>
          <div className={`bg-${color}-600 mr-3 text-xl px-5 leading-10 rounded-full text-white text-center font-normal whitespace-nowrap`}>チャット</div>
      </div>
    </div>
  );
}
