import React from "react";

export const Button = () => {
    return (
        <div className="flex flex-col sm:pb-[170px]">
            <div className="flex flex-col items-center space-y-4 sm:space-y-3">
                <span className="text-lg sm:leading-normal sm:text-xs">press button</span>
                <button className="z-[11]">
                    <img className="z-[11]" src="/images/main/button/button1.png"/>
                </button>
            </div>
            <img className="absolute bottom-0 max-w-[1000px] left-1/2 -translate-x-1/2 z-[1] sm:hidden" src="/images/main/button/bg.png"/>
            <img className="hidden sm:flex absolute bottom-[120px] left-1/2 -translate-x-1/2 z-[1] sm:max-w-full" src="/images/main/button/bgMob.png"/>
        </div>
    )
}