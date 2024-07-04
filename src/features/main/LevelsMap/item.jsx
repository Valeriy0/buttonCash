import React from "react";

export const Item = () => {
    return (
            <div className="flex flex-col relative items-center justify-between w-[180px] h-[151px] rounded-[20px] border-[1px] border-green">
                <span className="text-[80px] font-bold leading-none pt-2">1</span>
                <span className="absolute bottom-[40px] text-lg leading-none">block</span>
                <div className="flex flex-col items-center justify-center">
                    <span className="text-black z-[11] text-lg">0.15 BNB</span>
                    <img className="absolute" src="/icons/main/levelsMap/rectangle.svg"/>
                </div>
                <button className="absolute top-4 right-4 ">
                    <img className="w-6 h-6 " src="/icons/main/leftBar/infoIcon.svg"/>
                </button>
            </div>
    )
}