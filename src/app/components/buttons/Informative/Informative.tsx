import React from "react";
import { buttonTextPropertiesInformative } from "./properties";
import { usePluginConfig } from "../../PluginConfigContext";
import { Button } from "../../../data/enums";
import { OnClick, PluginMessage } from "../../../data/types";
import classNames from "classnames";
import Arrow from "../../../assets/arrows/arrow_informative.svg";
import style from "../../../styles/buttons/Informative.module.scss";
import Tag from "./Tag";

const Informative = (): JSX.Element => {
  const pluginConfig = usePluginConfig();
  const { hover, arrow, dark } = pluginConfig;
  const className = classNames(style.base, {
    [style.hasHover]: hover,
    [style.darkTheme]: dark,
  });

  const handleOnClick: OnClick = () => {
    const pluginMessage: PluginMessage = {
      event: "click",
      buttonId: Button.Informative,
      pluginConfig,
    };
    parent.postMessage({ pluginMessage }, "*");
  };

  return (
    <button className={className} onClick={handleOnClick}>
      <Tag />
      <span className={style.text}>
        {buttonTextPropertiesInformative.defaultText}
      </span>
      {arrow && <Arrow className={style.arrow} />}
    </button>
  );
};

export default Informative;
