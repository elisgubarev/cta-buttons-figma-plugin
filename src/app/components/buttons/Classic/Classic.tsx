import React from "react";
import { buttonTextPropertiesClassic } from "./properties";
import { usePluginConfig } from "../../PluginConfigContext";
import { OnClick, PluginMessage } from "../../../data/types";
import { Button } from "../../../data/enums";
import classNames from "classnames";
import Arrow from "../../../assets/arrows/arrow_classic.svg";
import style from "../../../styles/buttons/Classic.module.scss";

const Classic = (): JSX.Element => {
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
      buttonId: Button.Classic,
      pluginConfig,
    };
    parent.postMessage({ pluginMessage }, "*");
  };

  return (
    <button className={buttonclassNames} onClick={handleOnClick}>
      <span className={style.text}>
        {buttonTextPropertiesClassic.defaultText}
      </span>
      {arrow && <Arrow className={style.arrow} />}
    </button>
  );
};

export default Classic;
