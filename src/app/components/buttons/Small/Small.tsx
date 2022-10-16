import React from "react";
import { buttonTextPropertiesSmall } from "./properties";
import { usePluginConfig } from "../../PluginConfigContext";
import { Button } from "../../../data/enums";
import { OnClick, PluginMessage } from "../../../data/types";
import classNames from "classnames";
import Arrow from "../../../assets/arrows/arrow_small.svg";
import style from "../../../styles/buttons/Small.module.scss";

const Small = (): JSX.Element => {
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
      buttonId: Button.Small,
      pluginConfig,
    };
    parent.postMessage({ pluginMessage }, "*");
  };

  return (
    <button className={className} onClick={handleOnClick}>
      <span className={style.text}>
        {buttonTextPropertiesSmall.defaultText}
      </span>
      {arrow && <Arrow className={style.arrow} />}
    </button>
  );
};

export default Small;
