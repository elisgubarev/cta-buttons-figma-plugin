import classNames from "classnames";
import React from "react";
import Icon from "../../../assets/customize.svg";
import style from "../../../styles/pluginUI/CustomizationMenu.module.scss";
import { usePluginConfig } from "../../PluginConfigContext";

interface Props {
  isMenuOpened: boolean;
  setIsMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropdownButton = (props: Props): JSX.Element => {
  const { isMenuOpened, setIsMenuOpened } = props;
  const { dark } = usePluginConfig();

  const toggleIsMenuOpened = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  return (
    <button
      className={classNames(style.button, {
        [style.buttonDark]: dark,
      })}
      onClick={toggleIsMenuOpened}
    >
      <Icon />
    </button>
  );
};

export default DropdownButton;
