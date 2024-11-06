"use client";

import { useEffect, useState } from "react";

import Header from "@/components/header/header";
import Main from "@/components/main/main";
import Popup from "@/components/popup/popup";
import OfferFinal from "@/components/offer-final/offer-final";
import { useAppSelector } from "@/hooks/hooks";
import { getTimerStatus } from "@/services/timer/reducer";
import Preloader from "@/components/preloader/preloader";
import { getSalesLoading } from "@/services/sales/reducer";

export default function Home() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => setPopupOpen(true);
  const closePopup = () => setPopupOpen(false);

  const timerStatus = useAppSelector(getTimerStatus);
  const salesLoading = useAppSelector(getSalesLoading);

  useEffect(() => {
    setPopupOpen(timerStatus);
  }, [timerStatus]);

  // if (salesLoading) {
  //   return (
  // <Popup isOpen={salesLoading}>
  // <Preloader />
  // </Popup>
  //   );
  // }

  return (
    <div className="min-h-screen flex flex-col bg-[rgb(246,247,247)] z-0">
      <Header />

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
      <Popup isOpen={salesLoading}>
        <Preloader />
      </Popup>
    </div>
  );
}
