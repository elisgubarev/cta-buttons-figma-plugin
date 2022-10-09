import React from "react";
import { Button } from "../../data/enums";
import { OnClick, PluginMessage } from "../../data/types";
import { usePluginConfig } from "../PluginConfigContext";
import classNames from "classnames";
import style from "../../styles/pluginUI/ButtonItem.module.scss";

interface Props {
  children: JSX.Element;
  buttonId: Button;
}

const ButtonItem = (props: Props): JSX.Element => {
  const { children, buttonId } = props;
  const pluginConfig = usePluginConfig();
  const { dark } = pluginConfig;

  const handleOnClick: OnClick = () => {
    const pluginMessage: PluginMessage = {
      event: "click",
      buttonId,
      pluginConfig,
    };
    parent.postMessage({ pluginMessage }, "*");
  };

  return (
    <div
      className={classNames(style.container, {
        [style.containerDark]: dark,
      })}
      onClick={handleOnClick}
    >
      {children}
    </div>
  );
};

export default ButtonItem;
