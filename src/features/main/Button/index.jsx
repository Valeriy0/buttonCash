import React from "react";

export const Button = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col items-center space-y-4">
                <span className="text-lg">press button</span>
                <button className="z-[11]">
                    <img className="z-[11]" src="/images/main/button/button1.png"/>
                </button>
            </div>
            <img className="absolute bottom-0 max-w-[1000px] left-1/2 -translate-x-1/2 z-[1]" src="/images/main/button/bg.png"/>
        </div>
    )
}