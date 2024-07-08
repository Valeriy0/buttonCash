import React from "react";

export const Header = () => {
    return (
        <div className="flex justify-between w-full sm:px-4">
            <span className="uppercase font-bold text-[32px] sm:text-xl sm:leading-5">Button <br className="hidden sm:flex"/> CA$H</span>
            <div className="flex space-x-3">
                <div className="flex items-center justify-center h-[42px] px-3 border-[1px] border-green rounded-xl sm:hidden">
                    <span>[15.45 BNB]</span>
                </div>
                <div className="flex items-center justify-center h-[42px] pl-3 pr-0.5 border-[1px] border-green rounded-xl space-x-4">
                    <span className="sm:text-sm">0x0213123...yecy35</span>
                    <button className="flex items-center justify-center bg-green rounded-lg p-2">
                        <img src="/icons/main/rightBar/copyIcon.svg" />
                    </button>
                </div>
           </div>
        </div>
    )
}