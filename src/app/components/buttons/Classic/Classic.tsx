import React from "react";
import { buttonTextPropertiesClassic } from "./properties";
import style from "../../../styles/buttons/Classic.module.scss";
import classNames from "classnames";
import { usePluginConfig } from "../../PluginConfigContext";
import Arrow from "../../../assets/arrow_classic.svg";

const Classic = (): JSX.Element => {
  const pluginConfig = usePluginConfig();
  const className = classNames(style.base, {
    [style.hover]: pluginConfig.hover,
    [style.outline]: pluginConfig.outline,
  });
  return (
    <button className={className}>
      <span className={style.text}>
        {buttonTextPropertiesClassic.defaultText}
      </span>
      <Arrow className={style.arrow} />
    </button>
  );
};

export default Classic;
