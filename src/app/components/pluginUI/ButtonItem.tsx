import React from "react";
import { Button } from "../../data/enums";
import { OnClick, PluginMessage } from "../../data/types";
import buttonItem from "../../styles/pluginUI/ButtonItem.module.scss";
import { usePluginConfig } from "../PluginConfigContext";

interface Props {
  children: JSX.Element;
  buttonId: Button;
}

const ButtonItem = (props: Props): JSX.Element => {
  const { children, buttonId } = props;
  const pluginConfig = usePluginConfig();

  const handleOnClick: OnClick = () => {
    const pluginMessage: PluginMessage = {
      event: "click",
      buttonId,
      pluginConfig,
    };
    parent.postMessage({ pluginMessage }, "*");
  };

  return (
    <div className={buttonItem.container} onClick={handleOnClick}>
      {children}
    </div>
  );
};

export default ButtonItem;
