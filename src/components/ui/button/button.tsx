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
}: TypeButtonProps): React.JSX.Element {
  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={!disabled}
      className={`font-rubik font-medium text-[20px] text-white rounded-[60px] transition-all duration-500 ${
        !disabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-colr_orange hover:bg-[#ff6b4a] hover:animate-pulse"
      } ${
        size !== "wide"
          ? "h-[76px] w-[281px] rounded-[60px]"
          : "h-[62px] w-[310px] rounded-[30px]"
      }`}
    >
      {text}
    </button>
  );
}
