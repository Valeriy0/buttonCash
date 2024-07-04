import React, { useMemo, useState } from "react";
import { Level } from "../../../components/Level";
import { Item } from "./item";

export const LevelsMap = ({currentLevel}) => {
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

    // const customStyle = useMemo(() => {
    //     const positionButtonCash = document.getElementById('button-cash');
    //     const positionCurrentLevel = document.getElementById(`level-1`);

    //     const dataButtonCash = positionButtonCash?.getBoundingClientRect();
    //     const dataCurrentLevel = positionCurrentLevel?.getBoundingClientRect();

    //     let temp = dataButtonCash?.left - dataButtonCash?.width / 10;

    //     const mapPadding = currentLevel === 1 ? temp : temp - dataCurrentLevel?.width * (currentLevel - 2);
    //     if (mapPadding) {
    //         return ({ left: `${mapPadding}px` });
    //     }
    // }, [currentLevel]);
    return (
           <div className="flex items-center space-x-[6px]">
            <button>
                <img src="/icons/main/levelsMap/arrow.svg"/>
            </button>
            <div className="flex  justify-center space-x-5 w-[500px]">
                <Item />
                <Item />

            </div>
            <button>
                <img className="rotate-180" src="/icons/main/levelsMap/arrow.svg"/>
            </button>
           </div>
    )
}

