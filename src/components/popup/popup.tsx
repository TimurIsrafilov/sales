import { ReactNode } from "react";
import Image from "next/image";
import close from "@/components/popup/close.svg";

interface TypePopupProps {
  isOpen: boolean;
  onClose?: () => void;
  children?: ReactNode;
}

export default function Popup({
  isOpen,
  onClose,
  children,
}: TypePopupProps): React.JSX.Element | null {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>

      <div
        className={`relative ${
          onClose ? "bg-[#F5F7F7]" : ""
        } pr-[40px] pl-[40px] pb-[40px]`}
      >
        {onClose ? (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <Image src={close} alt="close" />
          </button>
        ) : (
          ""
        )}
        {children}
      </div>
    </div>
  );
}
