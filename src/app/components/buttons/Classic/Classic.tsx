import React from "react";
import { buttonTextPropertiesClassic } from "./properties";
import { usePluginConfig } from "../../PluginConfigContext";
import classNames from "classnames";
import Arrow from "../../../assets/arrow_classic.svg";
import style from "../../../styles/buttons/Classic.module.scss";

const Classic = (): JSX.Element => {
  const pluginConfig = usePluginConfig();
  const { hover, arrow, outline, dark } = pluginConfig;

  const buttonclassNames = classNames(style.base, {
    [style.hover]: hover,
    [style.outline]: outline,
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
