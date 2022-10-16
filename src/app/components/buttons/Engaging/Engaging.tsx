import React from "react";
import { buttonTextPropertiesEngaging } from "./properties";
import { usePluginConfig } from "../../PluginConfigContext";
import { Button } from "../../../data/enums";
import { OnClick, PluginMessage } from "../../../data/types";
import classNames from "classnames";
import Arrow from "../../../assets/arrows/arrow_engaging.svg";
import style from "../../../styles/buttons/Engaging.module.scss";

const Sharp = (): JSX.Element => {
  const pluginConfig = usePluginConfig();
  const { hover, outline, arrow, dark } = pluginConfig;
  const className = classNames(style.base, {
    [style.hasHover]: hover,
    [style.outline]: outline,
    [style.darkTheme]: dark,
  });

  const handleOnClick: OnClick = () => {
    const pluginMessage: PluginMessage = {
      event: "click",
      buttonId: Button.Engaging,
      pluginConfig,
    };
    parent.postMessage({ pluginMessage }, "*");
  };

  return (
    <button className={className} onClick={handleOnClick}>
      <span className={style.text}>
        {buttonTextPropertiesEngaging.defaultText}
      </span>
      {arrow && <Arrow className={style.arrow} />}
    </button>
  );
};

export default Sharp;
