import { useMemo } from "react";
import { Web3ReactProvider } from "@web3-react/core";

import "./style.scss";

import {
  metaMask,
  metaMaskHooks,
  walletConnectV2Hooks,
  walletConnectV2,
} from "./connectors/wallets";
import { RoutesFind } from "./RoutesFind";

function App() {
  const connectors = useMemo(() => {
    return [
      [metaMask, metaMaskHooks],
      [walletConnectV2, walletConnectV2Hooks],
    ];
  }, []);

  return (
    <Web3ReactProvider connectors={connectors}>
     <RoutesFind />
    </Web3ReactProvider>
  );
}

export default App;
