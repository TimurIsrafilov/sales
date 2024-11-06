import { useState } from "react";

import FinalPriceCards from "@/components/final-price-cards/final-price-cards";
import Button from "@/components/ui/button/button";
import { TypeSalesData } from "@/types/types";
import { useAppSelector } from "@/hooks/hooks";
import { getCard, getIsCardChosen } from "@/services/card/reducer";
import { recomendationText, warningText } from "@/utils/textData";
import { getSales } from "@/services/sales/reducer";
import Link from "next/link";

type TypePriceCardsProps = {
  salesData: TypeSalesData | null;
};

export default function OfferFinal() {
  const salesData = useAppSelector(getSales);

  const titleFirstPart = "Не упусти свой";
  const titleSecondPart = "последний шанс";
  const offerFirstPart = "Мы знаем, как трудно начать..";
  const offerSecondPart = "Поэтому!";
  const saleFirstPart = "Дарим скидку для";
  const saleSecondPart = "лёгкого старта 🏃‍♂️";

  const warningText = "Посмотри, что мы для тебя приготовили 🔥";

  const [checked, setChecked] = useState(false);

  const choosenCard = useAppSelector(getCard);
  const isCardChosen = useAppSelector(getIsCardChosen);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const handleButtonClick = () => {
    console.log(choosenCard);
  };

  return (
    <div className="container flex gap-6 flex-col justify-center items-center max-w-[750px] mx-auto">
      <div className="relative self-start h-[21px] w-[173px] bg-[#01B9C5]">
        <h4 className="font-pt-root-ui font-medium text-center text-[16px] text-[#FFFFFF]">
          горящее предложение
        </h4>
      </div>
      <div className="container flex">
        <h3 className="font-rubik font-bold text-center text-[30px] text-[#2D3242]">
          {titleFirstPart.toUpperCase()}
        </h3>
        <h3 className="font-rubik font-bold text-[30px] text-[#01B9C5] ml-[8px]">
          {titleSecondPart.toUpperCase()}
        </h3>
      </div>
      <div className="container flex">
        <p className="font-pt-root-ui font-bold text-center text-[30px] text-[#2D3242]">
          {offerFirstPart}
        </p>
        <p className="font-pt-root-uifont-bold text-[30px] text-[#01B9C5] ml-[8px]">
          {offerSecondPart}
        </p>
      </div>
      <div className="container flex">
        <p className="font-pt-root-ui font-bold text-center text-[30px] text-[#2D3242]">
          {saleFirstPart}
        </p>
        <p className="font-pt-root-uifont-bold text-[30px] text-[#01B9C5] ml-[8px]">
          {saleSecondPart}
        </p>
      </div>

      <p className="font-pt-root-ui font-medium text-center text-[24px] text-[#2D3242] self-start">
        {warningText}
      </p>

      <FinalPriceCards salesData={salesData} choosenCard={choosenCard} />
      <Button
        size="wide"
        text="Начать тренироваться"
        onClick={handleButtonClick}
        disabled={isCardChosen}
      />
    </div>
  );
}
