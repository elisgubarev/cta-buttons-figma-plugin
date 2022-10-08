import React from "react";
import classNames from "classnames";
import checkedIcon from "../../../assets/checked.svg";
import style from "../../../styles/pluginUI/CustomizationMenu.module.scss";
import { usePluginConfig, useSetPluginConfig } from "../../PluginConfigContext";
import { PluginConfig } from "../../../data/types";

interface Props {
  configProperty: keyof PluginConfig;
  setIsMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
  children?: JSX.Element | string;
}
const MenuOption = (props: Props): JSX.Element => {
  const { children, setIsMenuOpened, configProperty } = props;
  const pluginConfig = usePluginConfig();
  const setPluginConfig = useSetPluginConfig();
  const isChecked = pluginConfig[configProperty];

  const handleOnClick = () => {
    setPluginConfig({
      ...pluginConfig,
      [configProperty]: !pluginConfig[configProperty],
    });
    setIsMenuOpened(false);
  };

  return (
    <button className={style.dropdownOption} onClick={handleOnClick}>
      <img
        className={classNames(style.icon, {
          [style.iconChecked]: isChecked,
        })}
        src={checkedIcon}
      />
      <span>{children}</span>
    </button>
  );
};

export default MenuOption;
