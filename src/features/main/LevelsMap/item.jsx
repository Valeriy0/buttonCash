import React from "react";

export const Item = () => {
    return (
            <div className="flex flex-col relative items-center justify-between w-[180px] h-[151px] rounded-[20px] border-[1px] border-green sm:h-[89px] sm:w-[107px] sm:rounded-xl">
                <span className="text-[80px] font-bold leading-none pt-2 sm:text-[48px] sm:pt-1.5 sm:leadinng-normal">1</span>
                <span className="absolute bottom-[40px] text-lg leading-none sm:text-[10px] sm:relative sm:bottom-auto">block</span>
                <div className="flex flex-col items-center justify-center sm:relative sm:w-full">
                    <span className="text-black z-[11] text-lg sm:text-[10px]">0.15 BNB</span>
                    <img className="absolute sm:w-[81.1px] sm:h-[17.9px]" src="/icons/main/levelsMap/rectangle.svg"/>
                </div>
                <button className="absolute top-4 right-4 sm:right-2 sm:top-2 ">
                    <img className="w-6 h-6 sm:w-[14.3px] sm:h-[14.3px]" src="/icons/main/leftBar/infoIcon.svg"/>
                </button>
            </div>
    )
}