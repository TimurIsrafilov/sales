import FinalPriceCard from "@/components/final-price-card/final-price-card";
import { TypeSaleData, TypeSalesData } from "@/types/types";

type TypePriceCardsProps = {
  salesData: TypeSalesData | null;
  choosenCard: string | null;
};

export default function FinalPriceCards({
  salesData,
  choosenCard,
}: TypePriceCardsProps): React.JSX.Element {
  const cardsData = [{ discount: 40 }, { discount: 50 }, { discount: 60 }];

  return (
    <div className="container flex justify-center items-center">
      <div className="flex flex-col md:grid md:grid-cols-3 gap-x-4 gap-y-10">
        {salesData
          ?.filter((item: TypeSaleData) => item.isDiscount)
          .map((item: TypeSaleData, index: number) => (
            <FinalPriceCard
              name={item.name}
              price={item.price}
              id={item.id}
              key={index}
              cardData={cardsData[index]}
              choosenCard={choosenCard}
            />
          ))}
      </div>
    </div>
  );
}
