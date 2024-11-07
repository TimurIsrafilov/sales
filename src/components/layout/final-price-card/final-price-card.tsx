import { useAppDispatch } from "@/hooks/hooks";
import { setCard } from "@/services/card/reducer";
import SaleLabel from "@/components/layout/sale-label/sale-label";

type TypeCardData = {
  discount: number;
};

type TypeFinalPriceCardProps = {
  name: string;
  price: number;
  id: string;
  cardData: TypeCardData;
  choosenCard: string | null;
};

export default function FinalPriceCard({
  name,
  price,
  id,
  cardData,
  choosenCard,
}: TypeFinalPriceCardProps): React.JSX.Element {
  const dispatch = useAppDispatch();
  const discountPrice = Math.round(price * (1 - cardData.discount / 100));

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
    <div className="container cursor-pointer" onClick={handleCardChoose}>
      <div
        className={`h-[210px] w-[210px] container border-2 rounded-2xl
        ${
          choosenCard === id
            ? "border-[#02bac5] bg-colr_white_gray"
            : "border-[#D3D6DD] bg-white"
        } p-[30px] relative`}
      >
        <div className="flex gap-[16px] flex-col">
          <p className="font-bebas font-medium text-[30px] text-[#687078]">
            {name.toUpperCase()}
          </p>

          <p className="font-pt-root-ui font-medium line-through text-lefy text-[26px] text-[#95979F] leading-[26px]">
            {`${price}₽`}
          </p>

          <div className="flex relative">
            <p className="font-pt-root-ui font-bold text-[50px] text-colr_gray leading-[50px]">
              {`${replaceDigits(discountPrice)}₽`}
            </p>
            <div className=" absolute top-[-20px] right-[-25px]">
              <SaleLabel discount={cardData.discount} size={50} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
