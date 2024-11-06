import PriceCard from "@/components/price-card/price-card";
import { TypeSaleData, TypeSalesData } from "@/types/types";

type TypePriceCardsProps = {
  salesData: TypeSalesData | null;
  choosenCard: string | null;
};

export default function PriceCards({
  salesData,
  choosenCard,
}: TypePriceCardsProps) {
  const cardsData = [
    { note: "Чтобы просто начать 👍🏻", discount: 30 },
    { note: "Привести тело впорядок 💪🏻", discount: 40 },
    { note: "Изменить образ жизни 🔥", discount: 50 },
    {
      note: "Всегда быть в форме и поддерживать своё здоровье ⭐️",
      discount: 70,
    },
  ];

  return (
    <div className="container grid grid-cols-3 gap-x-4 gap-y-10 max-h-[480px] pt-[50px]">
      {salesData
        ?.filter((item: TypeSaleData) => item.isPopular)
        .map((item: TypeSaleData, index: number) => (
          <PriceCard
            name={item.name}
            price={item.price}
            id={item.id}
            key={index}
            type={index !== 3 ? "vertical" : "horizontal"}
            cardData={cardsData[index]}
            choosenCard={choosenCard}
          />
        ))}
    </div>
  );
}
