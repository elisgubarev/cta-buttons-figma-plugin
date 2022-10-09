import { PluginMessage } from "../app/data/types";
import { createButton } from "./createButton";

figma.showUI(__html__, {
  width: 576,
  height: 504,
});

Promise.all([
  figma.clientStorage.getAsync("pluginConfig"),
  figma.loadFontAsync({ family: "Lato", style: "Bold" }),
  figma.loadFontAsync({ family: "Montserrat", style: "Bold" }),
  figma.loadFontAsync({ family: "Montserrat", style: "SemiBold" }),
])
  .then((values) => {
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
  })
  .catch((error) => {
    console.error("Loading failed:", error);
  });

figma.ui.onmessage = (message: PluginMessage) => {
  if (message.event === "log") {
    console.log("selection:", figma.currentPage.selection);
  }
  if (message.event === "saveConfig") {
    figma.clientStorage
      .setAsync("pluginConfig", message.pluginConfig)
      .catch((error) => {
        console.log("Couldn't save config in store:", error);
      });
  }
  if (message.event === "click") {
    const onCloseMessage = createButton(message.buttonId, message.pluginConfig);
    figma.closePlugin(onCloseMessage);
  }
};
