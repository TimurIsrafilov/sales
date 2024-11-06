import { useEffect } from "react";
import Image from "next/image";
import man from "@/components/sale/man.png";
import PriceCards from "@/components/price-cards/price-cards";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { getSales } from "@/services/sales/reducer";
import { loadSales } from "@/services/sales/actions";
import Offer from "../offer/offer";

export default function Main() {
  const dispatch = useAppDispatch();
  const salesData = useAppSelector(getSales);
  const title = "Выберите подходящий тарифный план";

  useEffect(() => {
    dispatch(loadSales());
  }, [dispatch]);

  return (
    <div className="bg-[rgb(246,247,247)]">
      <h2 className="font-rubik font-bold text-center text-[40px] text-[#2D3242]">
        {title.toUpperCase()}
      </h2>
      <div className="container flex gap-[79px] mx-auto max-w-[1098px]">
        <Image
          src={man}
          alt="man"
          className="man"
          style={{ height: "715px" }}
        />
        <Offer salesData={salesData} />
      </div>
    </div>
  );
}
