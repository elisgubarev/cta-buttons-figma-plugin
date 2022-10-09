import React from "react";
import "../styles/index.scss";
import { PluginConfigProvider } from "./PluginConfigContext";
import { PluginMessage } from "../data/types";
import Content from "../layouts/Content";

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
      <Content />
    </PluginConfigProvider>
  );
};

export default App;
