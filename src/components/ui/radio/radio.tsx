import Link from "next/link";
import "./checkbox.css";

type TypeRadioProps = {
  onClick: () => void;
  checked: boolean;
};

export default function Radio() {
  { onClick, checked }: TypeRadioProps
  return (
    <div className="flex items-center space-x-2 gap-4">
      <input
        type="radio"
        checked={checked}
        onChange={onClick}
        // className="custom-checkbox"
      />
    </div>
  );
}
