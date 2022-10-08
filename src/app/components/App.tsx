import React from "react";
import ButtonItem from "./pluginUI/ButtonItem";
import Classic from "./buttons/Classic/Classic";
import Sharp from "./buttons/Sharp/Sharp";
import { Button } from "../data/enums";
import "../styles/index.scss";
import plugin from "../styles/pluginUI/plugin.module.scss";
import Round from "./buttons/Round/Round";
import CustomizationButton from "./pluginUI/CustomizationButton";
import { PluginConfigProvider } from "./PluginConfigContext";
import { PluginMessage } from "../data/types";

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
        <CustomizationButton />
      </div>
    </PluginConfigProvider>
  );
};

export default App;
