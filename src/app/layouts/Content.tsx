import React, { useState } from "react";
import Cheerful from "../components/buttons/Cheerful/Cheerful";
import Classic from "../components/buttons/Classic/Classic";
import Engaging from "../components/buttons/Engaging/Engaging";
import Round from "../components/buttons/Round/Round";
import Sharp from "../components/buttons/Sharp/Sharp";
import Small from "../components/buttons/Small/Small";
import CustomizationMenu from "../components/pluginUI/customization/CustomizationMenu";
import EyeCatching from "../components/buttons/EyeCatching/EyeCatching";
import Oldschool from "../components/buttons/Oldschool/Oldschool";
import Futuristic from "../components/buttons/Futuristic/Futuristic";
import ButtonFrame from "../components/pluginUI/ButtonFrame";
import {
  usePluginConfig,
  useSetPluginConfig,
} from "../components/PluginConfigContext";
import { PluginUIEvent } from "../data/types";
import classNames from "classnames";
import style from "../styles/pluginUI/Content.module.scss";
import Informative from "../components/buttons/Informative/Informative";

const Content = (): JSX.Element => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { dark } = usePluginConfig();
  const setPluginConfig = useSetPluginConfig();

  onmessage = (event: PluginUIEvent) => {
    if (event.data.pluginMessage.type === "dataLoaded") {
      setPluginConfig(event.data.pluginMessage.pluginConfig);
      setIsLoaded(true);
    }
  };

  const buttonsArray = [
    <Classic />,
    <Sharp />,
    <Small />,
    <Round />,
    <EyeCatching />,
    <Cheerful />,
    <Engaging />,
    <Futuristic />,
    <Oldschool />,
    <Informative />,
  ];

  const renderContent = () => {
    if (!isLoaded) return null;
    return buttonsArray.map((button, index) => {
      return (
        <ButtonFrame id={index} key={index}>
          {button}
        </ButtonFrame>
      );
    });
  };

  return (
    <div
      className={classNames(style.container, {
        [style.containerDark]: dark,
      })}
    >
      <div className={style.content}>
        {renderContent()}
        <CustomizationMenu />
      </div>
    </div>
  );
};

export default Content;
