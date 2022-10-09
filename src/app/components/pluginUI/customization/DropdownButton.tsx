import React from "react";
import Icon from "../../../assets/customize.svg";
import style from "../../../styles/pluginUI/CustomizationMenu.module.scss";

interface Props {
  isMenuOpened: boolean;
  setIsMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropdownButton = (props: Props): JSX.Element => {
  const { isMenuOpened, setIsMenuOpened } = props;

  const toggleIsMenuOpened = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  return (
    <button className={style.button} onClick={toggleIsMenuOpened}>
      <Icon />
    </button>
  );
};

export default DropdownButton;
