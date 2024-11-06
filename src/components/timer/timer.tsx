import { useAppDispatch } from "@/hooks/hooks";
import { setTimerStatus } from "@/services/timer/reducer";
import { useState, useEffect } from "react";

export default function Timer() {
  const dispatch = useAppDispatch();
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    if (seconds > 0) {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(interval);
    }

    if (seconds === 0) {
      dispatch(setTimerStatus());
    }
  }, [seconds]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <h2
      className={`font-bebas font-regular text-[60px] leading-[0px] ${
        seconds > 5 ? "text-[#01B9C5]" : "text-[#FD4D35]"
      }`}
    >
      {minutes < 10 ? `0${minutes}` : minutes}:
      {remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}
    </h2>
  );
}
