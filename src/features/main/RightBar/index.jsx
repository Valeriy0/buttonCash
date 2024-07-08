import React from "react";

export const RightBar = () => {
    return (
        <div className="flex flex-col items-end space-y-6 sm:flex-row-reverse sm:items-center sm:justify-between sm:space-y-0">
           <div className="flex flex-col space-y-3 items-end sm:text-xs">
                <span>/ F0und T0t4l Pr0f1t: [123.45] BNB</span>
                <span>/ Frens Pr0f1t: [3.45] BNB</span>
                <span>/ C0d1ng Frens C0unt: [4]</span>
            </div>
            <img className="absolute pt-[110px] sm:h-[100px] sm:w-[100px] sm:relative sm:pt-0 sm:mr-3" src="/icons/main/rightBar/donut.svg"/>
        </div>
    )
}