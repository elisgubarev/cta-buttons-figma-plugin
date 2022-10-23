import React from "react";
import { usePluginConfig } from "../PluginConfigContext";
import classNames from "classnames";
import style from "../../styles/pluginUI/ButtonFrame.module.scss";

interface Props {
  id: number;
  children: JSX.Element;
}

const ButtonFrame = (props: Props): JSX.Element => {
  const { children, id } = props;
  const { dark } = usePluginConfig();

  return (
    <div
      className={classNames(style.container, {
        [style.containerDark]: dark,
      })}
      style={{ animationDelay: `${id * 0.04}s` }}
    >
      {children}
    </div>
  );
};

export default ButtonFrame;
