import { useCallback, useEffect } from "react";

export function useInterval(callback: any, delay: number) {
  const savedCallback = useCallback(callback, [callback]);

  useEffect(() => {
    const executeCallback = () => {
      savedCallback();
    };

    const timer = setInterval(executeCallback, delay);

    return () => clearInterval(timer);
  }, [delay, savedCallback]);
}
