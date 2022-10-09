import React from "react";
import { buttonTextPropertiesClassic } from "./properties";
import style from "../../../styles/buttons/Classic.module.scss";
import classNames from "classnames";
import { usePluginConfig } from "../../PluginConfigContext";
import Arrow from "../../../assets/arrow_classic.svg";

const Classic = (): JSX.Element => {
  const pluginConfig = usePluginConfig();
  const { hover, arrow, outline, dark } = pluginConfig;

  const buttonclassNames = classNames(style.base, {
    [style.hover]: hover,
    [style.outline]: outline,
  });
  const arrowClassNames = classNames(style.arrow, {});

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
