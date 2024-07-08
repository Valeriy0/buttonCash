import React from "react";
import { LeftBar } from "../../features/main/LeftBar";
import { RightBar } from "../../features/main/RightBar";
import { Middle } from "../../features/main/Middle";
import { Button } from "../../features/main/Button";
import { Transactions } from "../../features/main/Transactions";
import { LevelsMap } from "../../features/main/LevelsMap";
import { Header } from "../../components/Header";
import { MobMenu } from "../../components/MobMenu";

export const Main = () => {
    return (
        <div className="h-full w-full bg-[#070707] relative flex flex-col items-center overflow-hidden ">
            <div className="flex flex-col items-center justify-center space-y-6 h-screen w-full px-[108px] pt-5 max-w-[1500px] text-green relative sm:px-0 sm:space-y-0 ">
                <Header />
                <div className="flex justify-between w-full h-full sm:px-4 sm:flex-col sm:justify-start sm:space-y-3">
                    <LeftBar />
                    <Middle />
                    <RightBar />
                </div>
                <div className="flex flex-col items-center ">
                    <LevelsMap />
                    <Button />     
                </div>
                <MobMenu />
                <Transactions />  
            </div>
        </div>
    )
}