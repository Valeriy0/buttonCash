import { useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { useGetContract } from "./useGetContract";
import { CONTRACT_NAMES } from "../constants";
import { Contract } from "@ethersproject/contracts";
import { frgxAbi } from "../contractsAbi/frgx";

export const useBalance = (props) => {
  const [balance, setBalance] = useState({});
  const { withoutFixed = false, contractsFetch } = props ?? {};

  const { account, provider } = useWeb3React();
  const { getContract } = useGetContract();

  const fetchBalance = async () => {
    try {
      // bnb balance
      const resultBnb = await provider.getBalance(account);
      const balanceBnb = parseInt(resultBnb) / 1e18;

      // busd balance
      const contract = await getContract(CONTRACT_NAMES.BUSD);
      const resultBalanceBusd = await contract?.balanceOf(account);
      const balanceBusd = parseInt(resultBalanceBusd) / 1e18;

      let balanceFrgx = 0;

      if (contractsFetch.frgx) {
        const contractFrgx = await new Promise(function (resolve, rejected) {
          if (provider) {
            const contract = new Contract(
              contractsFetch.frgx,
              frgxAbi,
              provider?.getSigner(account).connectUnchecked() || provider,
            );

            resolve(contract);
          } else {
            rejected("error init contract: ");
          }
        });
        const resultBalanceFrgx = await contractFrgx?.balanceOf(account);
        balanceFrgx = parseInt(resultBalanceFrgx) / 1e18;
      }

      setBalance({
        balanceBnb,
        balanceBusd,
        balanceFrgx,
        isFirstLoaded: true,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return {
    balanceBusd: withoutFixed
      ? balance.balanceBusd ?? 0
      : parseFloat(balance.balanceBusd ?? 0).toFixed(2),
    balanceBnb: withoutFixed
      ? balance.balanceBnb ?? 0
      : parseFloat(balance.balanceBnb ?? 0).toFixed(3),
    balanceFrgx: withoutFixed
      ? balance.balanceFrgx ?? 0
      : parseFloat(balance.balanceFrgx ?? 0).toFixed(2),
    isFirstLoaded: balance.isFirstLoaded,
    fetchBalance,
  };
};
