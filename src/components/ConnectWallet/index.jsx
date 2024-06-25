import React, { useState } from 'react';

import { WALLETS } from "../../connectors/wallets";
import { useTryActivation } from "../../helpers/hooks/useTryActivation";

export const ConnectWallet = () => {
  const [showWallets, setShowWallets] = useState(false);
    const { tryActivation } = useTryActivation();

    const onWalletClick = (wallet) => () => {
        tryActivation(wallet.connector);
    };

  return (
      <div>
        <button onClick={() => setShowWallets(prev => !prev)} className="bg-active-pink rotate-2 rounded-3xl p-7">Connect wallet</button>
        {showWallets && (
            <div className="flex w-full flex-col space-y-3.5 max-w-[460px] z-[11] overflow-auto sm:pb-5">
              {WALLETS?.map((wallet) => {
                return (
                    <div
                        className="flex items-center space-x-5 rounded-[20px] border-[1px] border-white-100 hover:bg-white-50 w-full p-2 cursor-pointer hover:bg-darkPurple"
                        onClick={onWalletClick(wallet)}
                        key={wallet.title}
                    >
                      <img alt="walletIcon" src={wallet.icon}/>
                      <div className="flex flex-col ml-5 space-y-3">
                        <span className="poppins text-medium text-white font-medium leading-none">{wallet.title}</span>
                        <span className="text-sm text-white-400 font-light leading-none">{wallet.subtitle}</span>
                      </div>
                    </div>
                );
              })}
            </div>
        )}
      </div>
  )
}
