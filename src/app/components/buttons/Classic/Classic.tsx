import React from "react";
import { buttonTextPropertiesClassic } from "./properties";
import style from "../../../styles/buttons/Classic.module.scss";
import classNames from "classnames";
import { usePluginConfig } from "../../PluginConfigContext";

const Classic = (): JSX.Element => {
  const pluginConfig = usePluginConfig();
  const className = classNames(style.base, {
    [style.hover]: pluginConfig.hover,
  });
  return (
    <button className={className}>
      <span className={style.text}>
        {buttonTextPropertiesClassic.defaultText}
      </span>
    </button>
  );
};

export default Classic;
