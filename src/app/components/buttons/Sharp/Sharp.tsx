import React from "react";
import { buttonTextPropertiesSharp } from "./properties";
import { usePluginConfig } from "../../PluginConfigContext";
import classNames from "classnames";
import Arrow from "../../../assets/arrows/arrow_sharp.svg";
import style from "../../../styles/buttons/Sharp.module.scss";

const Sharp = (): JSX.Element => {
  const { hover, outline, arrow, dark } = usePluginConfig();
  const className = classNames(style.base, {
    [style.hasHover]: hover,
    [style.outline]: outline,
    [style.darkTheme]: dark,
  });

  return (
    <button className={className}>
      <span className={style.text}>
        {buttonTextPropertiesSharp.defaultText}
      </span>
      {arrow && <Arrow className={style.arrow} />}
    </button>
  );
};

export default Sharp;
