import React from "react";

export const Level = ({ isActive, level, price, isChooseLevel }) => {
  
  return (
    <div id={`level-${level}`} className={`relative px-[60px] sm:px-[70px] h-full flex items-center justify-center rounded-[15px] ${ level % 2 === 1 ? `levels_bg_even ${isActive ? "levels_green_shadow" : ""}` : `levels_bg_uneven ${isActive ? "levels_red_shadow" : ""}`} relative`}>
      <div className="flex flex-col items-center justify-center z-[1] leading-6 ">
        <span className={`${isActive ? "text-white" : "text-[#151515]"} font-overlock text-6xl font-extrabold`}>{level}</span>
        <span className={`${isActive ? "text-white" : "text-[#151515]"} text-white font-montserrat text-[33px] sm:text-[29px]`}>Level</span>
      </div>
      {isChooseLevel && (
        <div className={`absolute top-0 border-[12px] border-[#29EDB2] h-[150px] w-full rounded-[15px] z-[11]`}>
          <div className="absolute bottom-[-1px] left-1/2 -translate-x-1/2  ">
              <div className="w-0 h-0 border-l-[30px] border-l-transparent border-b-[20px] border-b-[#29EDB2] border-r-[30px] border-r-transparent" />
          </div> 
        </div>
          )
        }
      <img className={`${isActive ? "absolute" : "hidden"} z-[0] bottom-0 h-[60%]`} src={`/levelsCard/${ level % 2 === 1 ? "green_shadow.png " : "red_shadow.png"}`}/>
    </div>
  )
}