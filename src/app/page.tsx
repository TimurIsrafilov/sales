"use client";

import { useEffect, useState } from "react";

import Header from "@/components/header/header";
import Main from "@/components/main/main";
import Popup from "@/components/popup/popup";
import OfferFinal from "@/components/offer-final/offer-final";
import Preloader from "@/components/preloader/preloader";
import { useAppSelector } from "@/hooks/hooks";
import { getTimerStatus } from "@/services/timer/reducer";
import { getSalesLoading } from "@/services/sales/reducer";

export default function Home(): React.JSX.Element {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const closePopup = () => setPopupOpen(false);

  const timerStatus = useAppSelector(getTimerStatus);
  const salesLoading = useAppSelector(getSalesLoading);

  useEffect(() => {
    setPopupOpen(timerStatus);
  }, [timerStatus]);

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f7f7] z-0">
      <Header />
      <Main />
      <Popup isOpen={isPopupOpen} onClose={closePopup}>
        <OfferFinal />
      </Popup>
      <Popup isOpen={salesLoading}>
        <Preloader />
      </Popup>
    </div>
  );
}
