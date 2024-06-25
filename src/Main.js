import { LevelsMap, ConnectWallet } from "./components";
import { useState } from "react";

function Main() {
  const [currentLevel, setCurrentLevel] = useState(1);

  const setNextLevel = () => {
    if (currentLevel < 12) {
      setCurrentLevel(currentLevel + 1);
    }
  };

  const setPrevLevel = () => {
    if (currentLevel > 1) {
      setCurrentLevel(currentLevel - 1);
    }
  };

  return (
    <div className="bg-[#151516] h-screen w-full flex flex-col space-y-10 items-center justify-center relative overflow-hidden">
      <ConnectWallet />
      <LevelsMap
        currentLevel={currentLevel}
        setCurrentLevel={setCurrentLevel}
      />
      <div className="flex items-center justify-center space-x-10 z-[11] sm:flex-col sm:items-center sm:justify-center sm:space-y-10 sm:space-x-0">
        <div className="flex items-center sm:space-x-14">
          <button
            onClick={() => setPrevLevel()}
            className="w-[62px] h-[62px] rounded-full bg-[#292D38] arrow_button_shadow flex items-center justify-center"
          >
            <img className="pr-1" src="/left_arrow.svg" />
          </button>
          <div className="relative w-[300px] flex items-center justify-center pb-15 sm:hidden ">
            <button
              id={"button-cash"}
              className="circle flex items-center justify-center"
            >
              <img src="cash.png" />
            </button>
            <img
              className="absolute top-1 h-[220px] w-[220px]"
              src="/buttonShadow.png"
            />
            <img
              className="absolute top-0 h-[275px] w-[260px]"
              src="/button_bg.png"
            />
          </div>
          <button
            onClick={() => setNextLevel()}
            className="w-[62px] h-[62px] rounded-full bg-[#292D38] arrow_button_shadow flex items-center justify-center"
          >
            <img className="pl-1" src="/right_arrow.svg" />
          </button>
        </div>
        <div className="hidden sm:flex relative w-[300px] flex items-center justify-center pb-15">
          <button
            id={"button-cash"}
            className="circle flex items-center justify-center"
          >
            <img src="cash.png" />
          </button>
          <img
            className="absolute top-0 h-[275px] w-[260px]"
            src="/button_bg.png"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-1 absolute bottom-3">
        <span className="font-montserrat text-lg text-white sm:text-sm">
          Time to activate 4 level
        </span>
        <div className="timer_bg w-[245px] h-[42px] z-[11] rounded-full font-montserrat font-bold text-[22px] flex justify-between items-center px-5 sm:w-[200px] sm:h-[34px] sm:text-lg ">
          <span className="timer_text_color">1d</span>
          <span className="timer_text_color">20h</span>
          <span className="timer_text_color">20m</span>
          <span className="timer_text_color">20s</span>
        </div>
      </div>
      <img
        className="absolute bottom-0 z-[1] w-[80%] sm:hidden "
        src="/green_shadow.png"
      />
      <img
        className="hidden sm:block absolute bottom-0 z-[1] sm:w-full  "
        src="/green_shadowMob.png"
      />
    </div>
  );
}

export default Main;
