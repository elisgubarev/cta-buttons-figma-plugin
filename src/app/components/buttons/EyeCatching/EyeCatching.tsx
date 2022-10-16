import React from "react";
import { buttonTextPropertiesEyeCatching } from "./properties";
import { usePluginConfig } from "../../PluginConfigContext";
import { Button } from "../../../data/enums";
import { OnClick, PluginMessage } from "../../../data/types";
import classNames from "classnames";
import Arrow from "../../../assets/arrows/arrow_eye_catching.svg";
import style from "../../../styles/buttons/EyeCatching.module.scss";

const EyeCatching = (): JSX.Element => {
  const pluginConfig = usePluginConfig();
  const { hover, arrow, outline, dark } = pluginConfig;

  const buttonclassNames = classNames(style.base, {
    [style.hasHover]: hover,
    [style.outline]: outline,
    [style.darkTheme]: dark,
  });

  const handleOnClick: OnClick = () => {
    const pluginMessage: PluginMessage = {
      event: "click",
      buttonId: Button.EyeCatching,
      pluginConfig,
    };
    parent.postMessage({ pluginMessage }, "*");
  };

  return (
    <button className={buttonclassNames} onClick={handleOnClick}>
      <span className={style.text}>
        {buttonTextPropertiesEyeCatching.defaultText}
      </span>
      {arrow && <Arrow className={style.arrow} />}
    </button>
  );
};

export default EyeCatching;
