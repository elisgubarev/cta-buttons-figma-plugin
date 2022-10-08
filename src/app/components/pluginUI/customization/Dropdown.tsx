import React from "react";
import style from "../../../styles/pluginUI/CustomizationMenu.module.scss";
import classNames from "classnames";

interface Props {
  isMenuOpened: boolean;
  children?: React.ReactNode;
}
const Dropdown = (props: Props): JSX.Element => {
  const { isMenuOpened, children } = props;
  const menuClassName = classNames(style.dropdown, {
    [style.dropdownHidden]: !isMenuOpened,
  });

  return <div className={menuClassName}>{children}</div>;
};

export default Dropdown;
