import Timer from "@/components/timer/timer";

export default function Header() {
  return (
    <div className="h-[80px] bg-white flex gap-[14px] items-center justify-center p-[6px]">
      <p className="font-pt-root-ui font-bold text-[30px] text-[#2D3242]">
        Скидка действует:
      </p>
      <div className="flex flex-col gap-[44px] relative">
        <Timer />
        <div className="flex gap-[14px] absolute mt-[12px]">
          <p className="font-pt-root-ui font-bold text-[16px] text-[#818798]">
            минут
          </p>
          <p className="font-pt-root-ui font-bold text-[16px] text-[#818798]">
            секунд
          </p>
        </div>
      </div>
    </div>
  );
}
