import { useCallback, useEffect, useRef } from "react";

export function useInterval(callback: () => void, delay: number | undefined) {
  const savedCallback = useCallback(callback, [callback]);
  const timer = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    const executeCallback = () => {
      savedCallback();
    };

    timer.current = setInterval(executeCallback, delay);

    return () => clearInterval(timer.current);
  }, [delay, savedCallback]);
}
