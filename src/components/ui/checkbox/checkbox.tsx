import Link from "next/link";
import "./checkbox.css";

type TypeCheckboxProps = {
  onClick: () => void;
  checked: boolean;
};

export default function Checkbox({
  onClick,
  checked,
}: TypeCheckboxProps): React.JSX.Element {
  return (
    <div className="flex items-center space-x-2 gap-4">
      <input
        type="checkbox"
        checked={checked}
        onChange={onClick}
        className="custom-checkbox"
      />
      <div className="container flex flex-col">
        <div className="container flex">
          <p className="font-pt-root-ui font-medium text-[16px] text-colr_light_gray">
            Я соглашаюсь с
          </p>
          <Link
            href="./"
            className="font-pt-root-ui font-medium text-[16px] text-colr_blue ml-[4px] mr-[4px]"
          >
            Правилами сервиса
          </Link>
          <p className="font-pt-root-ui font-medium text-[16px] text-colr_light_gray">
            и условиями
          </p>
        </div>
        <Link
          href="./"
          className="font-pt-root-ui font-medium text-[16px] text-colr_blue"
        >
          Публичной оферты.
        </Link>
      </div>
    </div>
  );
}
