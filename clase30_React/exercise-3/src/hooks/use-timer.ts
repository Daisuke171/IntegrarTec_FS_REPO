import { useState, useEffect } from "react";

export function useTimer(initialSeconds: number, onComplete?: () => void) {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);

  const pause = () => setIsRunning(false);
  
  const resume = () => setIsRunning(true);

  const reset = () => {
    setSeconds(initialSeconds);
    setIsRunning(false);
  };

  const setTime = (newTime: number) => {
    setSeconds(newTime);
    setIsRunning(false);
  };

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsRunning(false);
          if (onComplete) onComplete();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, onComplete]);

  return { seconds, isRunning, pause, resume, reset, setTime };
}
