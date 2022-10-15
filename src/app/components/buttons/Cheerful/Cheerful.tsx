import React from "react";
import { buttonTextPropertiesCheerful } from "./properties";
import { usePluginConfig } from "../../PluginConfigContext";
import classNames from "classnames";
import Arrow from "../../../assets/arrows/arrow_cheerful.svg";
import style from "../../../styles/buttons/Cheerful.module.scss";

const Cheerful = (): JSX.Element => {
  const { hover, outline, arrow, dark } = usePluginConfig();
  const className = classNames(style.base, {
    [style.hasHover]: hover,
    [style.outline]: outline,
    [style.darkTheme]: dark,
  });

  return (
    <button className={className}>
      <span className={style.text}>
        {buttonTextPropertiesCheerful.defaultText}
      </span>
      {arrow && <Arrow className={style.arrow} />}
    </button>
  );
};

export default Cheerful;
