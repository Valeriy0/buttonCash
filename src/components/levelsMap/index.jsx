import React, { useMemo, useState } from "react";
import { Level } from "../Level";

export const LevelsMap = ({ currentLevel}) => {
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
            isActive: true,
        },

        {
            level: 4,
            price: '',
            isActive: true,
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

        const mapPadding = currentLevel === 1 ? temp : temp - dataCurrentLevel?.width * (currentLevel - 2);
        if (mapPadding) {
            return ({ left: `${mapPadding}px` });
        }
    }, [currentLevel]);



    return (
        <div className="h-[190px] w-full relative ">
            <div style={customStyle} className={`absolute bg-[#292D38] rounded-[20px] h-full main_block_shadow`}>
                <div className="flex items-center justify-start h-full px-6 py-6 space-x-3 ">
                    {levelsInfo.map((item, itemIndex) => {
                        const isChoose = currentLevel === itemIndex;
                        return (
                            <div className="h-full relative">
                                <Level {...item} key={itemIndex} />
                                <div className={`absolute top-0 border-[12px] border-[#29EDB2] h-[150px] w-full rounded-[15px]`}>
                                   <div className="absolute bottom-[-1px] left-1/2 -translate-x-1/2  ">
                                        <div class="w-0 h-0 
                                            border-l-[30px] border-l-transparent
                                            border-b-[20px] border-b-[#29EDB2]
                                            border-r-[30px] border-r-transparent">
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        ) 
                    })}
                </div>
            </div>
        </div>
    )
}
