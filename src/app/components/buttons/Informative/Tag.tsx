import React from "react";
import { buttonTextPropertiesInformativeTag } from "./propertiesTag";
import { usePluginConfig } from "../../PluginConfigContext";
import classNames from "classnames";
import style from "../../../styles/buttons/InformativeTag.module.scss";

const Tag = (): JSX.Element => {
  const pluginConfig = usePluginConfig();
  const { dark } = pluginConfig;
  const className = classNames(style.base, {
    [style.darkTheme]: dark,
  });

  return (
    <div className={className}>
      <span className={style.text}>
        {buttonTextPropertiesInformativeTag.defaultText}
      </span>
    </div>
  );
};

export default Tag;
