import Image from "next/image";
import star from "@/public/star.svg";

type TypeSaleLabelProps = {
  discount: number;
  size: number;
};

export default function SaleLabel({
  discount,
  size,
}: TypeSaleLabelProps): React.JSX.Element {
  return (
    <div className={`relative w-[${size}px] h-[${size}px]`}>
      <p className="font-pt-root-ui font-medium text-[18px] text-[#FFFFFF] leading-[40px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {`-${discount}%`}
      </p>
      <Image src={star} alt="star" className="w-full h-full object-cover" />
    </div>
  );
}
