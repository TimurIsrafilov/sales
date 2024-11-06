import { ReactNode } from "react";
import Image from "next/image";
import close from "@/components/popup/close.svg";

interface TypePopupProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode; // children не обязателен, поэтому "?"
}

export default function Popup({
  isOpen,
  onClose,
  children,
}: TypePopupProps): React.JSX.Element | null {
  if (!isOpen) return null; // Не отображаем попап, если он закрыт

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Затемняющий фон */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose} // Закрываем попап при клике на фон
      ></div>

      {/* Контейнер для попапа */}
      {/* <div className="relative bg-white p-8 rounded-lg z-10 w-[90%] max-w-md shadow-lg"> */}
      <div className="relative bg-[#F5F7F7] pr-[40px] pl-[40px] pb-[40px]">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <Image src={close} alt="close" />
        </button>
        {children} {/* Контент попапа */}
      </div>
    </div>
  );
}
