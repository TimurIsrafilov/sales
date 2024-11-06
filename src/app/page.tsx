"use client";

import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "@/services/store";
import Header from "@/components/header/header";
import Main from "@/components/main/main";
import Popup from "@/components/popup/popup";
import OfferFinal from "@/components/offer-final/offer-final";
import { useAppSelector } from "@/hooks/hooks";
import { getTimerStatus } from "@/services/timer/reducer";

export default function Home() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => setPopupOpen(true);
  const closePopup = () => setPopupOpen(false);

  const timerStatus = useAppSelector(getTimerStatus);

  useEffect(() => {
    setPopupOpen(timerStatus);
  }, [timerStatus]);

  return (
    <div className="min-h-screen flex flex-col bg-[rgb(246,247,247)] z-0">
      <Header />
      <Provider store={store}>
        <Main />
        <button
          onClick={openPopup}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Открыть Попап
        </button>
        <Popup isOpen={isPopupOpen} onClose={closePopup}>
          <OfferFinal />
        </Popup>
      </Provider>
    </div>
  );
}
