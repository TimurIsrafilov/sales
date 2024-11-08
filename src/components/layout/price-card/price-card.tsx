import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import SaleLabel from "@/components/layout/sale-label/sale-label";
import { setCard } from "@/services/card/reducer";
import { getTimerStatus } from "@/services/timer/reducer";

type TypeCardData = {
  note: string;
  discount: number;
};

type TypePriceCardProps = {
  name: string;
  price: number;
  id: string;
  cardData: TypeCardData;
  type: string;
  choosenCard: string | null;
};

export default function PriceCard({
  name,
  price,
  id,
  cardData,
  type,
  choosenCard,
}: TypePriceCardProps): React.JSX.Element {
  const dispatch = useAppDispatch();
  const discountPrice = Math.round(price * (1 - cardData.discount / 100));

  const timerStatus = useAppSelector(getTimerStatus);

  const handleCardChoose = () => {
    dispatch(setCard(id));
  };

  function replaceDigits(discountPrice: number): number {
    const numStr = discountPrice.toString();
    if (numStr.length === 3) {
      return parseInt(numStr.slice(0, 1) + "99");
    } else if (numStr.length === 4) {
      return parseInt(numStr.slice(0, 2) + "90");
    } else {
      return discountPrice;
    }
  }

  return (
    <div
      className={`${
        type !== "vertical" ? "col-span-3" : "container"
      } cursor-pointer`}
      onClick={handleCardChoose}
    >
      <div
        className={`${
          type !== "vertical" ? "sm:h-[125px] h-[261px]" : "h-[261px] container"
        } border-2 rounded-2xl
        ${
          choosenCard === id
            ? "border-[#02bac5] bg-colr_white_gray"
            : "border-[#D3D6DD] bg-white"
        } p-[30px] relative`}
      >
        {!timerStatus ? (
          <div className="top-[-30px] right-[5px] absolute transition-all duration-500 transform translate-x-0 opacity-100">
            <SaleLabel discount={cardData.discount} size={65} />
          </div>
        ) : (
          <div className="top-[-30px] right-[5px] absolute transition-all duration-500 transform translate-x-[50px] opacity-0">
            <SaleLabel discount={cardData.discount} size={65} />
          </div>
        )}

        <div
          className={`flex gap-[16px] ${
            type !== "vertical" ? "flex-col sm:flex-row" : "flex-col"
          }`}
        >
          <p
            className={`font-bebas font-medium ${
              type !== "vertical"
                ? "text-[38px] text-colr_gray"
                : "text-[30px] text-[#687078]"
            }`}
          >
            {name.toUpperCase()}
          </p>
          <div className="flex flex-col">
            <p className="font-pt-root-ui font-bold text-[50px] text-colr_gray leading-[50px]">
              {timerStatus ? `${price}₽` : `${replaceDigits(discountPrice)}₽`}
            </p>
            <p className="font-pt-root-ui font-medium line-through text-right text-[26px] text-[#95979F] leading-[26px] h-[16px]">
              {timerStatus ? "" : `${price}₽`}
            </p>
          </div>
          <p
            className={`font-pt-root-ui font-medium ${
              type === "vertical" ? "text-center" : "text-start"
            } text-[16px] text-[#2F4353]`}
          >
            {cardData.note}
          </p>
        </div>
      </div>
    </div>
  );
}
