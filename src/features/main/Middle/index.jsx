import React from "react";
import { LevelsMap } from "../LevelsMap";

export const Middle = () => {
    return (
        <div className="flex flex-col space-y-3 items-center justify-start absolute left-1/2 -translate-x-1/2 top-6 sm:relative sm:top-0 sm:flex-row sm:space-y-0 sm:items-end sm:justify-between">
                <span className="text-2xl font-bold sm:text-lg">12345 ID</span>
                <button className="flex items-center justify-center bg-green h-[48px] w-[265px] rounded-xl sm:w-fit sm:px-4 sm:h-[40px]">
                    <span className="text-black text-lg font-medium sm:text-sm">
                        Invite new hackers
                    </span>
                </button>
            </div>
    )
}