// useTimer.ts
import { useState, useEffect, useRef } from "react";

export const useTimer = (
  initialTime: number,
  onTimeEnd: () => void,
  setDisableControlBar: React.Dispatch<React.SetStateAction<boolean>>,
  setWordsPerSecond: React.Dispatch<React.SetStateAction<number[]>>,
  inputValue: string
) => {
  const [timer, setTimer] = useState<number | null>(null);
  const [timerStarted, setTimerStarted] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    var currentWords = inputValue.trim().split(/\s+/).length;
    if (timerStarted && timer !== null) {
      setDisableControlBar(true);
      intervalRef.current = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer !== null) {
            if (prevTimer > 0) {
              setWordsPerSecond((prev) => [...prev, currentWords]);
              return prevTimer - 1;
            } else {
              clearInterval(intervalRef.current as NodeJS.Timeout);
              //setTimerStarted(false);
              setDisableControlBar(false);
              onTimeEnd();
              setTimer(null);
              return 0;
            }
          }
          return null;
        });
      }, 1000);
    } else {
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [timerStarted, timer]);

  const startTimer = () => {
    setTimer(initialTime);
    setTimerStarted(true);
  };

  return { timer, startTimer, timerStarted };
};
