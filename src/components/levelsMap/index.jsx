import React from "react";

export const LevelsMap = () => {

    const levelsInfo = [
        {
            level: 1,
            price: '',
            isActive: true,
        },
        {
            level: 2,
            price: '',
            isActive: true,
        },
        {
            level: 3,
            price: '',
            isActive: false,
        },

        {
            level: 4,
            price: '',
            isActive: false,
        },

        {
            level: 5,
            price: '',
            isActive: false,
        },



    ]
    return (
        <div className="bg-[#292D38] right-0 rounded-[20px] h-[190px] main_block_shadow">
            <div className="flex items-end justify-end h-full px-6 py-6 space-x-3 ">
                {levelsInfo.map((item, itemIndex) => {
                    return (
                    <div className={`px-[60px] h-full flex items-center justify-center rounded-[15px] ${ itemIndex % 2 === 0 ? `levels_bg_even ${item.isActive ? "levels_green_shadow" : ""}` : `levels_bg_uneven ${item.isActive ? "levels_red_shadow" : ""}`} relative`}>
                        <div className="flex flex-col items-center justify-center z-[1] leading-6 ">
                    <span className={`${item.isActive ? "text-white" : "text-[#151515]"} font-overlock text-6xl font-extrabold`}>{itemIndex + 1}</span>
                            <span className={`${item.isActive ? "text-white" : "text-[#151515]"} text-white font-montserrat text-[33px]`}>Level</span>
                        </div>
                        <img className={`${item.isActive ? "absolute" : "hidden"} z-[0] bottom-0 h-[60%]`} src={`/levelsCard/${ itemIndex % 2 === 0 ? "green_shadow.png " : "red_shadow.png"}`}/>
                    </div>
                    )
                })}
                {/* <div className=" px-[60px] h-full flex items-center justify-center rounded-[15px] levels_bg_uneven levels_red_shadow relative">
                    <div className="flex flex-col items-center justify-center z-[1] leading-6">
                        <span className="text-white font-overlock text-6xl font-extrabold">2</span>
                        <span className="text-white font-montserrat text-[33px]">Level</span>
                    </div>
                    <img className="absolute z-[0] bottom-0 h-[60%]" src="/levelsCard/red_shadow.png"/>
                </div> */}
            </div>
        </div>
    )
}