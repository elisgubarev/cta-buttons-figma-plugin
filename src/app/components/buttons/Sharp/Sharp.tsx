import React from "react";
import { buttonTextPropertiesSharp } from "./properties";
import style from "../../../styles/buttons/Sharp.module.scss";
import classNames from "classnames";
import { usePluginConfig } from "../../PluginConfigContext";

const Sharp = (): JSX.Element => {
  const pluginConfig = usePluginConfig();
  const className = classNames(style.base, {
    [style.hover]: pluginConfig.hover,
  });

  return (
    <button className={className}>
      <span className={style.text}>
        {buttonTextPropertiesSharp.defaultText}
      </span>
    </button>
  );
};

export default Sharp;
