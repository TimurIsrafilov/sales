import Button from "@/components/ui/button/button";
import FinalPriceCards from "@/components/layout/final-price-cards/final-price-cards";
import { useAppSelector } from "@/hooks/hooks";
import { getCard, getIsCardChosen } from "@/services/card/reducer";
import { getSales } from "@/services/sales/reducer";

export default function OfferFinal(): React.JSX.Element {
  const salesData = useAppSelector(getSales);

  const titleFirstPart = "Не упусти свой";
  const titleSecondPart = "последний шанс";
  const offerFirstPart = "Мы знаем, как трудно начать..";
  const offerSecondPart = "Поэтому!";
  const saleFirstPart = "Дарим скидку для";
  const saleSecondPart = "лёгкого старта 🏃‍♂️";

  const warningText = "Посмотри, что мы для тебя приготовили 🔥";

  const choosenCard = useAppSelector(getCard);
  const isCardChosen = useAppSelector(getIsCardChosen);

  const handleButtonClick = () => {
    console.log("Выбран тариф по предложению:", choosenCard);
  };

  return (
    <div className="container flex gap-6 flex-col justify-center items-center max-w-[750px] mx-auto ">
      <div className="relative self-start h-[21px] w-[273px] bg-colr_aqua">
        <h4 className="font-pt-root-ui font-medium text-center text-[16px] text-[#FFFFFF]">
          горящее предложение
        </h4>
      </div>
      <div className="container flex justify-center">
        <h3 className="font-rubik font-bold text-center text-[30px] text-colr_gray">
          {titleFirstPart.toUpperCase()}
        </h3>
        <h3 className="font-rubik font-bold text-center text-[30px] text-colr_aqua ml-[8px]">
          {titleSecondPart.toUpperCase()}
        </h3>
      </div>
      <div className="container flex flex-col justify-center items-center">
        <div className="container flex justify-center">
          <p className="font-pt-root-ui font-medium text-center text-[30px] text-colr_gray">
            {offerFirstPart}
          </p>
          <p className="font-pt-root-ui font-bold text-center text-[30px] text-colr_gray ml-[8px]">
            {offerSecondPart}
          </p>
        </div>
        <div className="container flex justify-center items-center border-2 rounded-2xl border-[#02bac5] h-[59px] w-[458px] rounded-[30px]">
          <p className="font-pt-root-ui font-bold text-[24px] text-colr_gray">
            {saleFirstPart}
          </p>
          <p className="font-pt-root-ui font-bold text-[24px] text-colr_aqua ml-[8px]">
            {saleSecondPart}
          </p>
        </div>
      </div>
      <div>
        <p className="font-pt-root-ui font-medium text-start text-[24px] text-colr_gray self-start">
          {warningText}
        </p>
        <FinalPriceCards salesData={salesData} choosenCard={choosenCard} />
      </div>
      <Button
        size="wide"
        text="Начать тренироваться"
        onClick={handleButtonClick}
        disabled={isCardChosen}
      />
    </div>
  );
}
