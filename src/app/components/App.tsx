import React from "react";
import ButtonItem from "./pluginUI/ButtonItem";
import Classic from "./buttons/Classic/Classic";
import Sharp from "./buttons/Sharp/Sharp";
import { Button } from "../data/enums";
import "../styles/index.scss";
import plugin from "../styles/pluginUI/plugin.module.scss";
import Round from "./buttons/Round/Round";
import { PluginConfigProvider } from "./PluginConfigContext";
import { PluginMessage } from "../data/types";
import CustomizationMenu from "./pluginUI/customization/CustomizationMenu";

document.addEventListener("keydown", (e) => {
  const pluginMessage: PluginMessage = {
    event: "log",
  };
  if (e.key === "Control") {
    parent.postMessage({ pluginMessage }, "*");
  }
});

const App = () => {
  return (
    <PluginConfigProvider>
      <div className={plugin.content}>
        <ButtonItem buttonId={Button.Classic}>
          <Classic />
        </ButtonItem>
        <ButtonItem buttonId={Button.Sharp}>
          <Sharp />
        </ButtonItem>
        <ButtonItem buttonId={Button.Round}>
          <Round />
        </ButtonItem>
        <CustomizationMenu />
      </div>
    </PluginConfigProvider>
  );
};

export default App;
