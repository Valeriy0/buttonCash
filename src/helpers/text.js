import copyToClipBoard from 'copy-to-clipboard';
import { callNotification } from './notification';

export const copy = (value) => {
  const isCopied = copyToClipBoard(value);

  if (isCopied) {
    callNotification({ type: 'info', message: 'Copied' });
  } else {
    callNotification({ type: 'error', message: 'Something went wrong, try to copy manually' });
  }
};

export const shortenAddress = (address, chars = 4) => {
  try {
    return `${address.substring(0, chars + 2)}...${address.substring(42 - chars)}`;
  } catch (error) {
    // throw Error(`Invalid 'address' parameter '${address}'.`);
  }
};
