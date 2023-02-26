import { useRef } from "react";

export function useDebounce(callback: () => void, delay: number) {
  const timer = useRef<ReturnType<typeof setTimeout>>();

  const dispatchDebounce = () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    const newTimer = setTimeout(() => {
      callback();
    }, delay);
    timer.current = newTimer;
  };
  return dispatchDebounce;
}
