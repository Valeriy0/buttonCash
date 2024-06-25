import { initializeConnector } from "@web3-react/core";
import { MetaMask } from "@web3-react/metamask";
import { UAParser } from "ua-parser-js";

import config from "../helpers/config";
import { WalletConnect } from "../libs/wc2";

export const [metaMask, metaMaskHooks] = initializeConnector(
  (actions) => new MetaMask({ actions }),
);

export const [walletConnectV2, walletConnectV2Hooks] = initializeConnector(
  (actions) =>
    new WalletConnect({
      actions,
      options: {
        projectId: "e6ef9b0e8901183986ce08096953ebbf",
        chains: [config.allowedChainId],
        optionalChains: [config.allowedChainId],
        showQrModal: true,
      },
    }),
);

const UA =
  typeof window !== "undefined"
    ? new UAParser(navigator.userAgent)
    : new UAParser("");

export const WALLETS = [
  {
    title: "Trust Wallet",
    subtitle: "DApp in app",
    connector: metaMask,
    icon: "/icons/walletsIcons/TW.svg",
  },
  {
    title: "TokenPocket",
    subtitle: "DApp in app",
    connector: metaMask,
    icon: "/icons/walletsIcons/TP.svg",
  },
  {
    title: "MetaMask",
    subtitle: "Desktop / DApp in app",
    connector: metaMask,
    icon: "/icons/walletsIcons/MT.svg",
  },
  {
    title: "WalletConnect",
    subtitle: "Any wallet and browser",
    connector: walletConnectV2,
    icon: "/icons/walletsIcons/WC.svg",
    disabled:
      (UA.getBrowser().name === "Chrome WebView" ||
        UA.getBrowser().name === "Chrome") &&
      parseInt(UA?.getBrowser?.()?.major) <= 87,
  },
];
