import React, { useMemo, useState } from "react";
import { Level } from "../Level";

export const LevelsMap = ({ currentLevel }) => {
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
        {
            level: 6,
            price: '',
            isActive: false,
        },
        {
            level: 7,
            price: '',
            isActive: false,
        },
        {
            level: 8,
            price: '',
            isActive: false,
        },
        {
            level: 9,
            price: '',
            isActive: false,
        },
        {
            level: 10,
            price: '',
            isActive: false,
        },
        {
            level: 11,
            price: '',
            isActive: false,
        },
        {
            level: 12,
            price: '',
            isActive: false,
        },
    ]

    const customStyle = useMemo(() => {
        const positionButtonCash = document.getElementById('button-cash');
        const positionCurrentLevel = document.getElementById(`level-1`);

        const dataButtonCash = positionButtonCash?.getBoundingClientRect();
        const dataCurrentLevel = positionCurrentLevel?.getBoundingClientRect();

        let temp = dataButtonCash?.left - dataButtonCash?.width / 10;

        const mapPadding = currentLevel === 1 ? temp : temp - dataCurrentLevel?.width * (currentLevel - 1);
        if (mapPadding) {
            return ({ left: `${mapPadding}px` });
        }
    }, [currentLevel]);

    return (
        <div className="h-[190px] w-full relative">
            <div style={customStyle} className="absolute bg-[#292D38] rounded-[20px] h-full main_block_shadow w-full">
                <div className="flex items-center justify-start h-full px-6 py-6 space-x-3 ">
                    {levelsInfo.map((item, itemIndex) => {
                        return <Level {...item} key={itemIndex} />
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
        </div>
    )
}