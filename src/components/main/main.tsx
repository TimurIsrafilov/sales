import { useEffect } from "react";
import Image from "next/image";
import man from "../../../public/man.png";
import Offer from "@/components/offer/offer";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { getSales } from "@/services/sales/reducer";
import { loadSales } from "@/services/sales/actions";

export default function Main(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const salesData = useAppSelector(getSales);
  const title = "Выберите подходящий тарифный план";

  useEffect(() => {
    dispatch(loadSales());
  }, [dispatch]);

  return (
    <div className="bg-[#f5f7f7]">
      <h2 className="font-rubik font-bold text-center text-[40px] text-[#2D3242]">
        {title.toUpperCase()}
      </h2>
      <div className="container flex flex-col lg:flex-row xl:gap-[79px] justify-center items-center mx-auto max-w-[1098px]">
        <Image
          src={man}
          alt="man"
          className="h-[441px] w-[277px] md:h-[715px] md:w-[434px]"
        />
        <Offer salesData={salesData} />
      </div>
    </div>
  );
}
