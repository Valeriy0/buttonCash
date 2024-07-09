import { useState } from "react";

export const useCallTransaction = () => {
  const [timerId, setTimerId] = useState(null);
  const [transactionInfo, setTransactionInfo] = useState({
    hash: null,
    isWaiting: false,
    isError: false,
    isSuccess: false,
  });

  const onCallTransaction = async (result) => {
    clearTimeout(timerId);
    setTimerId(null);
    try {
      setTransactionInfo((prev) => ({
        ...prev,
        isSuccess: false,
        isError: false,
        isWaiting: true,
        hash: result?.hash,
      }));

      const waitResult = await result.wait();

      if (waitResult.status === 0) {
        setTransactionInfo((prev) => ({
          ...prev,
          isSuccess: false,
          isError: true,
          isWaiting: false,
        }));
      } else {
        new Promise(function () {
          const timerId = setTimeout(function (x) {
            setTransactionInfo((prev) => ({
              ...prev,
              isSuccess: true,
              isError: false,
              isWaiting: false,
              hash: waitResult.transactionHash,
            }));
          }, 5000);
          setTimerId(timerId);
        }).then(() => {
          clearTimeout(timerId);
        });
      }
    } catch (e) {
      setTransactionInfo({
        isSuccess: false,
        isError: false,
        isWaiting: false,
        data: null,
      });
    }
  };

  return {
    transactionInfo,
    onCallTransaction,
    setTransactionInfo,
  };
};
