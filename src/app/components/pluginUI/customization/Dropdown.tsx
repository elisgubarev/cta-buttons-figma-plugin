import React from "react";
import style from "../../../styles/pluginUI/CustomizationMenu.module.scss";
import classNames from "classnames";
import { usePluginConfig } from "../../PluginConfigContext";

interface Props {
  isMenuOpened: boolean;
  children?: React.ReactNode;
}
const Dropdown = (props: Props): JSX.Element => {
  const { isMenuOpened, children } = props;
  const { dark } = usePluginConfig();
  const menuClassName = classNames(style.dropdown, {
    [style.dropdownHidden]: !isMenuOpened,
    [style.dropdownDark]: dark,
  });

  return <div className={menuClassName}>{children}</div>;
};

export default Dropdown;
