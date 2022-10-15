import React from "react";
import { buttonTextPropertiesEyeCatching } from "./properties";
import { usePluginConfig } from "../../PluginConfigContext";
import classNames from "classnames";
import Arrow from "../../../assets/arrows/arrow_eye_catching.svg";
import style from "../../../styles/buttons/EyeCatching.module.scss";

const EyeCatching = (): JSX.Element => {
  const { hover, arrow, outline, dark } = usePluginConfig();

  const buttonclassNames = classNames(style.base, {
    [style.hasHover]: hover,
    [style.outline]: outline,
    [style.darkTheme]: dark,
  });

  return (
    <button className={buttonclassNames}>
      <span className={style.text}>
        {buttonTextPropertiesEyeCatching.defaultText}
      </span>
      {arrow && <Arrow className={style.arrow} />}
    </button>
  );
};

export default EyeCatching;
