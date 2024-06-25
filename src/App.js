import { useMemo } from "react";
import Main from "./Main";
import { Web3ReactProvider } from "@web3-react/core";

import "./App.css";

import {
  metaMask,
  metaMaskHooks,
  walletConnectV2Hooks,
  walletConnectV2,
} from "./connectors/wallets";

function App() {
  const connectors = useMemo(() => {
    return [
      [metaMask, metaMaskHooks],
      [walletConnectV2, walletConnectV2Hooks],
    ];
  }, []);

  return (
    <Web3ReactProvider connectors={connectors}>
      <Main />
    </Web3ReactProvider>
  );
}

export default App;
