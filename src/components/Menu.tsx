import { FC, MutableRefObject } from "react";
import { modeOptions, ModeType } from "../utils/constants";

type MenuProps = {
  modeRef: MutableRefObject<ModeType>;
};

const Menu: FC<MenuProps> = ({ modeRef }) => {
  const handleClick = (option: ModeType) => {
    modeRef.current = option;
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
