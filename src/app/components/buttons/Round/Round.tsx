import React from "react";
import { usePluginConfig } from "../../PluginConfigContext";
import { buttonTextPropertiesRound } from "./properties";
import { Button } from "../../../data/enums";
import { OnClick, PluginMessage } from "../../../data/types";
import classNames from "classnames";
import Arrow from "../../../assets/arrows/arrow_round.svg";
import style from "../../../styles/buttons/Round.module.scss";

const Round = (): JSX.Element => {
  const pluginConfig = usePluginConfig();
  const { hover, arrow, outline, dark } = pluginConfig;
  const className = classNames(style.base, {
    [style.hasHover]: hover,
    [style.outline]: outline,
    [style.darkTheme]: dark,
  });

  const handleOnClick: OnClick = () => {
    const pluginMessage: PluginMessage = {
      event: "click",
      buttonId: Button.Round,
      pluginConfig,
    };
    parent.postMessage({ pluginMessage }, "*");
  };

  return (
    <button className={className} onClick={handleOnClick}>
      <span className={style.text}>
        {buttonTextPropertiesRound.defaultText}
      </span>
      {arrow && <Arrow className={style.arrow} />}
    </button>
  );
};

export default Round;
