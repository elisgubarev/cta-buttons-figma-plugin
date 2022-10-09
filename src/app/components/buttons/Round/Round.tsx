import React from "react";
import { usePluginConfig } from "../../PluginConfigContext";
import { buttonTextPropertiesRound } from "./properties";
import classNames from "classnames";
import Arrow from "../../../assets/arrow_classic.svg";
import style from "../../../styles/buttons/Round.module.scss";

const Round = (): JSX.Element => {
  const { hover, arrow, outline, dark } = usePluginConfig();
  const className = classNames(style.base, {
    [style.hasHover]: hover,
  });

  return (
    <button className={className}>
      <span className={style.text}>
        {buttonTextPropertiesRound.defaultText}
      </span>
      {arrow && <Arrow />}
    </button>
  );
};

export default Round;
