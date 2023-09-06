import './App.css';
import { LevelsMap } from './components/levelsMap';
import { useState } from 'react';
function App() {
  const [currentLevel, setCurrentLevel] = useState(1);

  const setNextLevel = () => {
    if (currentLevel < 12) {
      setCurrentLevel(currentLevel + 1)
    }
  }

  const setPrevLevel = () => {
    if (currentLevel > 1) {
      setCurrentLevel(currentLevel - 1)
    }
  }

  return (
    <div className="bg-[#151516] h-screen w-full flex flex-col space-y-10 items-center justify-center relative overflow-hidden">
      <LevelsMap currentLevel={currentLevel} setCurrentLevel={setCurrentLevel} /> 
      <div className="flex items-center justify-center space-x-10 z-[11]">
        <button onClick={() => setPrevLevel()} className="w-[62px] h-[62px] rounded-full bg-[#292D38] arrow_button_shadow flex items-center justify-center">
          <img className="pr-1" src="/left_arrow.svg"/>
        </button>
        <div className="relative w-[300px] flex items-center justify-center pb-15 ">
          <button id={'button-cash'} className="circle flex items-center justify-center">
            <img src="cash.png" /> 
          </button>
          <img className="absolute top-0 h-[275px] w-[260px]" src="/button_bg.png"/> 
        </div>
        <button onClick={() => setNextLevel()} className="w-[62px] h-[62px] rounded-full bg-[#292D38] arrow_button_shadow flex items-center justify-center">
          <img className="pl-1" src="/right_arrow.svg"/>
        </button>
       
      </div>
      <div className="flex flex-col items-center justify-center space-y-1 absolute bottom-3">
        <span className="font-montserrat text-lg text-white">Time to activate 4 level</span>
        <div className="timer_bg w-[245px] h-[42px] z-[11] rounded-full font-montserrat font-bold text-[22px] flex justify-between items-center px-5 ">
          <span className="timer_text_color">1d</span>
          <span className="timer_text_color">20h</span>
          <span className="timer_text_color">20m</span>
          <span className="timer_text_color">20s</span>
        </div>
      </div>
     

        <img className="absolute bottom-0 z-[1] w-[80%] " src="/green_shadow.png"/> 
    </div>
  );
}

export default App;
