import React from "react";

export const RightBar = () => {
    return (
        <div className="flex flex-col items-end space-y-6">
            <div className="flex space-x-3">
                <div className="flex items-center justify-center h-[42px] px-3 border-[1px] border-green rounded-xl">
                    <span>[15.45 BNB]</span>
                </div>
                <div className="flex items-center justify-center h-[42px] pl-3 pr-0.5 border-[1px] border-green rounded-xl space-x-4">
                    <span>0x0213123...yecy35</span>
                    <button className="flex items-center justify-center bg-green rounded-lg p-2">
                        <img src="/icons/main/rightBar/copyIcon.svg" />
                    </button>
                </div>
           </div>
           <div className="flex flex-col space-y-3 items-end">
                <span>/ F0und T0t4l Pr0f1t: [123.45] BNB</span>
                <span>/ Frens Pr0f1t: [3.45] BNB</span>
                <span>/ C0d1ng Frens C0unt: [4]</span>
            </div>
            <img className="absolute pt-[180px]" src="/icons/main/rightBar/donut.svg"/>
        </div>
    )
}