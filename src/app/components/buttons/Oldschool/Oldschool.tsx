import React from "react";
import { buttonTextPropertiesOldschool } from "./properties";
import { usePluginConfig } from "../../PluginConfigContext";
import { Button } from "../../../data/enums";
import { OnClick, PluginMessage } from "../../../data/types";
import classNames from "classnames";
import Arrow from "../../../assets/arrows/arrow_oldschool.svg";
import style from "../../../styles/buttons/Oldschool.module.scss";

const Oldschool = (): JSX.Element => {
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
      buttonId: Button.Cheerful,
      pluginConfig,
    };
    parent.postMessage({ pluginMessage }, "*");
  };

  return (
    <button className={className} onClick={handleOnClick}>
      <span className={style.text}>
        {buttonTextPropertiesOldschool.defaultText}
      </span>
      {arrow && <Arrow className={style.arrow} />}
    </button>
  );
};

export default Oldschool;
