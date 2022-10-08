import React from "react";
import customizeIcon from "../../assets/customize.svg";
import style from "../../styles/pluginUI/CustomizationButton.module.scss";
import { usePluginConfig, useSetPluginConfig } from "../PluginConfigContext";

const CustomizationButton = (): JSX.Element => {
  const pluginConfig = usePluginConfig();
  const setPluginConfig = useSetPluginConfig();

  const toggleHover = () => {
    setPluginConfig({
      ...pluginConfig,
      hover: !pluginConfig.hover,
    });
  };

  return (
    <button className={style.button} onClick={toggleHover}>
      <img src={customizeIcon} />
    </button>
  );
};

export default CustomizationButton;
