import React from "react";
import { LeftBar } from "../../features/main/LeftBar";
import { RightBar } from "../../features/main/RightBar";
import { Middle } from "../../features/main/Middle";

export const Main = () => {
    return (
        <div className="h-full w-full bg-[#070707] relative flex flex-col items-center overflow-hidden ">
            <div className="flex flex-col items-center justify-center h-full w-full px-[108px] pt-5 max-w-[1500px] h-screen text-green">
                <div className="flex justify-between w-full h-full">
                    <LeftBar />
                    <Middle />
                    <RightBar />
                </div>
            </div>
        </div>
    )
}