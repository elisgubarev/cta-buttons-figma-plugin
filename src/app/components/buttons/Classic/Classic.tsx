import React from "react";
import { buttonTextPropertiesClassic } from "./properties";
import { usePluginConfig } from "../../PluginConfigContext";
import classNames from "classnames";
import Arrow from "../../../assets/arrow_classic.svg";
import style from "../../../styles/buttons/Classic.module.scss";

const Classic = (): JSX.Element => {
  const { hover, arrow, outline, dark } = usePluginConfig();

  const buttonclassNames = classNames(style.base, {
    [style.hasHover]: hover,
    [style.outline]: outline,
    [style.darkTheme]: dark,
  });

  return (
    <button className={buttonclassNames}>
      <span className={style.text}>
        {buttonTextPropertiesClassic.defaultText}
      </span>
      {arrow && <Arrow className={style.arrow} />}
    </button>
  );
};

export default Classic;
