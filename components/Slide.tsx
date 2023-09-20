import { useState } from "react";
import Chat from "../components/Chat";

export default function Slide({ backgroundImg, name, description, color }) {
  const [showChat, setShowChat] = useState(false);

  const openChat = () => {
    setShowChat(true);
  };

  const closeChat = () => {
    setShowChat(false);
  };

  return (
    <div
      className={`text-${color}-600 relative flex flex-col m-auto h-full bg-cover bg-center rounded-3xl p-2`}
    >
      <img src={backgroundImg} alt="" />
      <div className="absolute inset-0">
        <h2 className="text-3xl font-bold pl-2 pt-2 w-48">{name}</h2>
      </div>
      <div className="absolute right-1 top-1 text-right text-xs flex flex-col items-end">
        {description.map((item, index) => (
          <div
            key={index}
            className={`bg-${color}-100 my-1 inline-block p-1 rounded-full`}
          >
            # {item}
          </div>
        ))}
      </div>
      <div className="absolute bottom-2 flex justify-between items-center justify-items-end pb-6 translate-y-1/2 backdrop-blur-sm">
        <div
          className={`mx-3 text-xs text-black text-ellipsis overflow-hidden break-all`}
        >
          「ナマステ。私はタゴールです。何があなたの心の平穏を乱すのですか？」
        </div>
        <div
          onClick={openChat}
          className={`bg-${color}-600 mr-3 text-xl px-5 leading-10 rounded-full text-black text-center font-normal whitespace-nowrap`}
        >
          チャット
        </div>
      </div>

      {showChat && (
        <div className="h-screen">
          <Chat
            onClose={closeChat}
            name={name}
            avatar={backgroundImg} // 这里可以设置头像
          />
        </div>
      )}
    </div>
  );
}
