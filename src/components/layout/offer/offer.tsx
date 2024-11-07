import { useState } from "react";

import PriceCards from "@/components/layout/price-cards/price-cards";
import Checkbox from "@/components/ui/checkbox/checkbox";
import Button from "@/components/ui/button/button";

import { TypeSalesData } from "@/types/types";
import { useAppSelector } from "@/hooks/hooks";
import { getCard, getIsCardChosen } from "@/services/card/reducer";
import { recomendationText, warningText } from "@/utils/textData";

type TypePriceCardsProps = {
  salesData: TypeSalesData | null;
};

export default function Offer({
  salesData,
}: TypePriceCardsProps): React.JSX.Element {
  const [checked, setChecked] = useState(false);

  const choosenCard = useAppSelector(getCard);
  const isCardChosen = useAppSelector(getIsCardChosen);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const handleButtonClick = () => {
    console.log("Выбран тариф по предложению:", choosenCard);
  };

  const disabled = checked && isCardChosen;

  return (
    <div className="container flex gap-6 flex-col max-w-[584px]">
      <PriceCards salesData={salesData} choosenCard={choosenCard} />
      <p className="font-pt-root-ui font-medium text-[16px] text-colr_gray">
        {recomendationText}
      </p>
      <Checkbox onClick={handleCheckboxChange} checked={checked} />
      <Button text="КУПИТЬ" onClick={handleButtonClick} disabled={disabled} />
      <p className="font-pt-root-ui font-regular text-[14px] text-colr_light_gray">
        {warningText}
      </p>
    </div>
  );
}
