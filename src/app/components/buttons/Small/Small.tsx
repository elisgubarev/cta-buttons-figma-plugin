import React from "react";
import { buttonTextPropertiesSmall } from "./properties";
import { usePluginConfig } from "../../PluginConfigContext";
import classNames from "classnames";
import Arrow from "../../../assets/arrows/arrow_small.svg";
import style from "../../../styles/buttons/Small.module.scss";

const Small = (): JSX.Element => {
  const { hover, outline, arrow, dark } = usePluginConfig();
  const className = classNames(style.base, {
    [style.hasHover]: hover,
    [style.outline]: outline,
    [style.darkTheme]: dark,
  });

  return (
    <button className={className}>
      <span className={style.text}>
        {buttonTextPropertiesSmall.defaultText}
      </span>
      {arrow && <Arrow className={style.arrow} />}
    </button>
  );
};

export default Small;
