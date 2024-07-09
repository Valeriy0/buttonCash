/* eslint-disable prettier/prettier */
import { LevelsMap, ConnectWallet } from "./components";
import { useState, useEffect } from "react";
import { CONTRACT_NAMES } from "./helpers/constants";
import { useGetContract } from "./helpers/hooks/useGetContract";
import { useWeb3React } from "@web3-react/core";
import { toWei } from "./helpers/numbers";

function Main() {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [user, setUser] = useState([]);
  const { getContract } = useGetContract();
  const { account } = useWeb3React();

  const setNextLevel = () => {
    if (currentLevel < 12) {
      setCurrentLevel(currentLevel + 1);
    }
  };

  const setPrevLevel = () => {
    if (currentLevel > 1) {
      setCurrentLevel(currentLevel - 1);
    }
  };

  useEffect(() => {
    if (account) {
      getUserData();
      getUserData2();
    }
  }, [account]);

  const getUserData = async () => {
    try {
      const contractButton = await getContract(CONTRACT_NAMES.BUTTON);
      console.log(contractButton.address)
      const result = await contractButton.getUserData(
        "0x90f2f9E443F87f612a2e126c8a090F7B40bDdF06"
      );

      setUser(result);
    } catch (e) {
      console.log(e);
    }
  };

  const getUserData2 = async () => {
    try {
      const contractButton = await getContract(CONTRACT_NAMES.BUTTON);
      const result = await contractButton.getUserData2(
        "0x90f2f9E443F87f612a2e126c8a090F7B40bDdF06"
      );

      console.log(result, 1234);
    } catch (e) {
      console.log(e);
    }
  };

  const upgradeLvl = async () => {
    try {
      const contractButton = await getContract(CONTRACT_NAMES.BUTTON);
      const result = await contractButton.buyNewLevel(3, {
        value: toWei(0.0001),
      });

      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };

  const register = async () => {
    try {
      const contractButton = await getContract(CONTRACT_NAMES.BUTTON);
      const result = await contractButton.registation(
        1,
        "0x90f2f9E443F87f612a2e126c8a090F7B40bDdF06",
      );

      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };

  console.log(user, 111);

  return (
    <div className="bg-[#151516] h-screen w-full flex flex-col space-y-10 items-center justify-center relative overflow-hidden">
      <ConnectWallet />

      <div className="flex flex-col space-y-2.5">
        <button
          className="p-2 bg-white-100 hover:bg-white-500 rounded"
          onClick={() => getUserData()}
        >
          Info about user
        </button>
        <button
          className="p-2 bg-white-100 hover:bg-white-500 rounded"
          onClick={() => register()}
        >
          Register
        </button>
        <button
          className="p-2 bg-white-100 hover:bg-white-500 rounded"
          onClick={() => upgradeLvl(1)}
        >
          Upgrade lvl
        </button>
      </div>
    </div>
  );
}

export default Main;
