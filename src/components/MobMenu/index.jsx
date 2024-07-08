import React, { useState } from "react";

export const MobMenu = () => {
    const [currentTub, setCurrentTab] = useState(0);

    const menuItem = [
        {
            title: 'Button',
            icon: 'buttonIcon',
            key: 'button',
        },
        {
            title: 'Frens',
            icon: 'frensIcon',
            key: 'frens',
        },
        {
            title: 'Earn',
            icon: 'earnIcon',
            key: 'earn',
        },
    ]
    return (
        <div className="hidden sm:flex absolute bottom-[43px] items-center w-full px-4">
            <div className="flex rounded-[18px] border-green border-[1px] h-[68px] w-full p-[6px]">
                {menuItem.map((item, itemIndex) => {
                    const isActive = currentTub === itemIndex
                    return (
                        <button onClick={() => {setCurrentTab(itemIndex)}} className={`flex flex-col py-[6px] px-[8px] items-center justify-between rounded-xl ${isActive ? 'bg-lightGreen' : ''} h-full w-full`} key={itemIndex}>
                            <img src={`/icons/main/mobMenu/${item.icon}.svg`}/>
                            <span className="text-[10px]">{item.title}</span>
                        </button>
                        )
                    })}
            </div>
        </div>
    )
}