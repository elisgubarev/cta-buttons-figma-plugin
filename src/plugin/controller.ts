import { PluginMessage } from "../app/data/types";
import { createButton } from "./createButton";

figma.showUI(__html__, {
  width: 576,
  height: 440,
});

Promise.all([
  figma.clientStorage.getAsync("pluginConfig"),
  figma.loadFontAsync({ family: "Lato", style: "Regular" }),
  figma.loadFontAsync({ family: "Lato", style: "Bold" }),
  figma.loadFontAsync({ family: "Montserrat", style: "SemiBold" }),
  figma.loadFontAsync({ family: "Montserrat", style: "Bold" }),
  figma.loadFontAsync({ family: "Orbitron", style: "Bold" }),
  figma.loadFontAsync({ family: "Source Code Pro", style: "SemiBold" }),
]).then((values) => {
  if (values[0]) {
    figma.ui.postMessage({ type: "dataLoaded", pluginConfig: values[0] });
    return;
  }
  figma.ui.postMessage({
    type: "dataLoaded",
    pluginConfig: {
      hover: true,
      arrow: false,
      outline: false,
      dark: false,
    },
  });
});

figma.ui.onmessage = (message: PluginMessage) => {
  if (message.event === "log") {
    console.log("selection:", figma.currentPage.selection);
  }
  if (message.event === "saveConfig") {
    figma.clientStorage.setAsync("pluginConfig", message.pluginConfig);
  }
  if (message.event === "click") {
    const onCloseMessage = createButton(message.buttonId, message.pluginConfig);
    figma.closePlugin(onCloseMessage);
  }
};
