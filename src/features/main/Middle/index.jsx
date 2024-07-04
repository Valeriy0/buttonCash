import React from "react";
import { LevelsMap } from "../LevelsMap";

export const Middle = () => {
    return (
        <div className="flex flex-col items-center space-y-[64px]">
            <div className="flex flex-col space-y-3 items-center">
                <span className="text-2xl font-bold">12345 ID</span>
                <button className="flex items-center justify-center bg-green h-[48px] w-[265px] rounded-xl">
                    <span className="text-black font-medium">
                        Invite new hackers
                    </span>
                    
                </button>

            </div>
            <LevelsMap />
        </div>
    )
}