import React, { useMemo, useState } from "react";
import { Level } from "../../../components/Level";
import { Item } from "./item";

export const LevelsMap = () => {
    return (
           <div className="flex items-center space-x-[6px] absolute top-[180px] sm:top-1/3 sm:w-full sm:px-4 ">
            <button>
                <img src="/icons/main/levelsMap/arrow.svg"/>
            </button>
            <div className="flex  justify-center space-x-5 w-[500px] sm:w-full">
                <Item />
                <Item />
            </div>
            <button>
                <img className="rotate-180" src="/icons/main/levelsMap/arrow.svg"/>
            </button>
           </div>
    )
}

