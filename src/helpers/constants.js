import { BigNumber } from "@ethersproject/bignumber";

export const CONTRACT_NAMES = {
  BUTTON: "button",
};

export const MAX_VALUE =
  "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";

export const DEFAULT_GAS_LIMIT = BigNumber.from(2000000);

export const SWAP_TOKEN_START = "2023-12-20T16:00Z";

export const FIRST_THIRTY_DATE = "2023-12-20T16:30Z";

export const BUY_LIST = [
  { title: "85", value: 85 },
  { title: "260", value: 260 },
  { title: "1050", value: 1050 },
  { title: "5250", value: 5250 },
  { title: "26250", value: 26250 },
  { title: "78450", value: 78450 },
  { title: "262500", value: 262500 },
];

export const LEVEL_PRICE = [
  0.00005, 0.00007, 0.0001, 0.00014, 0.0002, 0.00028, 0.0004, 0.00055, 0.0008,
  0.0011, 0.0016, 0.0022, 0.0032, 0.0044, 0.0065, 0.008,
];
