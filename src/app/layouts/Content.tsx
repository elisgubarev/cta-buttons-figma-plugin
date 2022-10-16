import React, { useState } from "react";
import Cheerful from "../components/buttons/Cheerful/Cheerful";
import Classic from "../components/buttons/Classic/Classic";
import Engaging from "../components/buttons/Engaging/Engaging";
import Round from "../components/buttons/Round/Round";
import Sharp from "../components/buttons/Sharp/Sharp";
import Small from "../components/buttons/Small/Small";
import ButtonItem from "../components/pluginUI/ButtonItem";
import CustomizationMenu from "../components/pluginUI/customization/CustomizationMenu";
import {
  usePluginConfig,
  useSetPluginConfig,
} from "../components/PluginConfigContext";
import { Button } from "../data/enums";
import { PluginUIEvent } from "../data/types";
import EyeCatching from "../components/buttons/EyeCatching/EyeCatching";
import classNames from "classnames";
import style from "../styles/pluginUI/Content.module.scss";

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

  const renderContent = () => {
    if (!isLoaded) return null;
    return (
      <>
        <ButtonItem buttonId={Button.Classic}>
          <Classic />
        </ButtonItem>
        <ButtonItem buttonId={Button.Sharp}>
          <Sharp />
        </ButtonItem>
        <ButtonItem buttonId={Button.Small}>
          <Small />
        </ButtonItem>
        <ButtonItem buttonId={Button.Round}>
          <Round />
        </ButtonItem>
        <ButtonItem buttonId={Button.EyeCatching}>
          <EyeCatching />
        </ButtonItem>
        <ButtonItem buttonId={Button.Cheerful}>
          <Cheerful />
        </ButtonItem>
        <ButtonItem buttonId={Button.Engaging}>
          <Engaging />
        </ButtonItem>
        <CustomizationMenu />
      </>
    );
  };

  return (
    <div
      className={classNames(style.container, {
        [style.containerDark]: dark,
      })}
    >
      <div className={style.content}>{renderContent()}</div>
    </div>
  );
};

export default Content;
