import React from "react";
import { buttonTextPropertiesCutCorner } from "./properties";
import { usePluginConfig } from "../../PluginConfigContext";
import classNames from "classnames";
import Arrow from "../../../assets/arrows/arrow_futuristic.svg";
import style from "../../../styles/buttons/Futuristic.module.scss";

const Futuristic = (): JSX.Element => {
  const { hover, outline, arrow, dark } = usePluginConfig();
  const className = classNames(style.base, {
    [style.hasHover]: hover,
    [style.outline]: outline,
    [style.darkTheme]: dark,
  });

  return (
    <button className={className}>
      <span className={style.text}>
        {buttonTextPropertiesCutCorner.defaultText}
      </span>
      {arrow && <Arrow className={style.arrow} />}
    </button>
  );
};

export default Futuristic;
