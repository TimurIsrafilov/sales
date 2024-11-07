import { useState, useEffect } from "react";
import { useAppDispatch } from "@/hooks/hooks";
import { setTimerStatus } from "@/services/timer/reducer";
import "./timer.css";

export default function Timer(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const [seconds, setSeconds] = useState(120);

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
      className={`${
        seconds > 30 || seconds === 0 ? "" : "blink"
      } font-bebas font-regular text-[60px] leading-[0px] ${
        seconds > 30 ? "text-colr_aqua" : "text-colr_orange"
      }`}
    >
      {minutes < 10 ? `0${minutes}` : minutes}:
      {remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}
    </h2>
  );
}
