// useTimer.ts
import { useState, useEffect, useRef } from "react";

export const useTimer = (initialTime: number, onTimeEnd: () => void) => {
  const [timer, setTimer] = useState<number | null>(null);
  const [timerStarted, setTimerStarted] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timerStarted && timer !== null) {
      intervalRef.current = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer !== null) {
            if (prevTimer > 0) {
              return prevTimer - 1;
            } else {
              clearInterval(intervalRef.current as NodeJS.Timeout);
              //setTimerStarted(false);
              onTimeEnd();
              setTimer(null);
              return 0;
            }
          }
          return null;
        });
      }, 1000);

      // Cleanup interval on component unmount
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [timerStarted, timer]);

  const startTimer = () => {
    setTimer(initialTime);
    setTimerStarted(true);
  };

  return { timer, startTimer, timerStarted };
};
