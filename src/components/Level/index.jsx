import React from "react";

export const Level = ({ isActive, level, price }) => {
  
  return (
    <div id={`level-${level}`} className={`px-[60px] h-full flex items-center justify-center rounded-[15px] ${ level % 2 === 1 ? `levels_bg_even ${isActive ? "levels_green_shadow" : ""}` : `levels_bg_uneven ${isActive ? "levels_red_shadow" : ""}`} relative`}>
                        <div className="flex flex-col items-center justify-center z-[1] leading-6 ">
                    <span className={`${isActive ? "text-white" : "text-[#151515]"} font-overlock text-6xl font-extrabold`}>{level}</span>
                            <span className={`${isActive ? "text-white" : "text-[#151515]"} text-white font-montserrat text-[33px]`}>Level</span>
                        </div>
                        <img className={`${isActive ? "absolute" : "hidden"} z-[0] bottom-0 h-[60%]`} src={`/levelsCard/${ level % 2 === 1 ? "green_shadow.png " : "red_shadow.png"}`}/>
                    </div>
  )
}