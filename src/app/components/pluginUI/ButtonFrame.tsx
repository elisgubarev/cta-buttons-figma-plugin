import React from "react";
import { usePluginConfig } from "../PluginConfigContext";
import classNames from "classnames";
import style from "../../styles/pluginUI/ButtonFrame.module.scss";

interface Props {
  children: JSX.Element;
}

const ButtonFrame = (props: Props): JSX.Element => {
  const { children } = props;
  const { dark } = usePluginConfig();

  return (
    <div
      className={classNames(style.container, {
        [style.containerDark]: dark,
      })}
    >
      {children}
    </div>
  );
};

export default ButtonFrame;
