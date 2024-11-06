type TypeButtonProps = {
  text: string;
  onClick: () => void;
  disabled: boolean;
  size?: string;
};

export default function Button({
  text,
  onClick,
  disabled,
  size,
}: TypeButtonProps) {
  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={!disabled}
      className={`text-white rounded-[60px] transition-all duration-500 ${
        !disabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-[#fd4d35] hover:bg-[#ff6b4a]"
      }  ${
        size !== "wide"
          ? "h-[76px] w-[281px] rounded-[60px]"
          : "h-[62px] w-[310px] rounded-[30px]"
      }`}
    >
      {text}
    </button>
  );
}
