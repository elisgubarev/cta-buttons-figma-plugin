import classNames from "classnames";
import React from "react";
import style from "../../../styles/buttons/Round.module.scss";
import { usePluginConfig } from "../../PluginConfigContext";

const Round = (): JSX.Element => {
  const pluginConfig = usePluginConfig();
  const className = classNames(style.base, {
    [style.hover]: pluginConfig.hover,
  });

  return (
    <button className={className}>
      <span className={style.text}>Sign Up</span>
    </button>
  );
};

export default Round;
