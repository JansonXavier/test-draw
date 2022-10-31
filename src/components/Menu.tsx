import { FC, MutableRefObject } from "react";
import { modeOptions, ModeType } from "../utils/constants";

type MenuProps = {
  mode: MutableRefObject<ModeType>;
};

const Menu: FC<MenuProps> = ({ mode }) => {
  const handleClick = (option: ModeType) => {
    mode.current = option;
  };

  return (
    <div>
      {modeOptions.map((option) => (
        <button key={option} onClick={() => handleClick(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default Menu;
