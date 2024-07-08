import React from "react";

export const LeftBar = () => {
    return (
        <div className="flex flex-col space-y-12 max-w-[260px] w-full sm:hidden"> 
                <div className="flex flex-col space-y-4">
                    <div className="flex w-full justify-between">
                        <span>tokens</span>
                        <div className="flex space-x-3">
                            <span>3000</span>
                            <img src="/icons/main/leftBar/tokenIcon.svg"/>
                        </div>
                    </div>
                    <div className='flex justify-between w-full'>
                        <span className="text-sm">invite new frens<br /> get +500 tokens</span>
                        <button className="flex items-center justify-center bg-green rounded-xl h-[38px] w-[76px]">
                            <span className="text-black text-sm">Invite</span>
                        </button>
                    </div>
                </div>
            <div className="flex flex-col space-y-6 p-4 w-full border-[1px] border-green rounded-xl">
                <div className="flex w-full justify-between">
                    <span className="text-2xl ">Your reward</span>
                    <img src="/icons/main/leftBar/infoIcon.svg"/>
                </div>
                <div className="flex w-full justify-between">
                    <span className="">+12.25 BNB</span>
                    <button className="flex items-center justify-center bg-green rounded-full w-[62px] h-[28px]">
                        <span className="font-medium text-black text-sm">claim</span>
                    </button>

                </div>

            </div>
        </div>
    )
}