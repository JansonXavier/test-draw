import { Dispatch, FC, SetStateAction } from "react";

const options = ["brush", "line", "arrow", "rect", "circle"];

type MenuProps = {
  mode: any;
};

const Menu: FC<MenuProps> = ({ mode }) => {
  const handleClick = (option: string) => {
    mode.current = option;
  };

  return (
    <div>
      {options.map((option) => (
        <button key={option} onClick={() => handleClick(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default Menu;
