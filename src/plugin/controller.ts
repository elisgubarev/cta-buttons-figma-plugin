import { PluginMessage } from "../app/data/types";
import { createButton } from "./createButton";

figma.showUI(__html__, {
  width: 576,
  height: 504,
});

Promise.all([
  figma.loadFontAsync({ family: "Lato", style: "Bold" }),
  figma.loadFontAsync({ family: "Montserrat", style: "Bold" }),
  figma.loadFontAsync({ family: "Montserrat", style: "SemiBold" }),
])
  .then(() => {
    console.log("Fonts loaded");
  })
  .catch(() => {
    console.log("Error, couldnt load fonts");
  });

figma.ui.onmessage = (message: PluginMessage) => {
  if (message.event === "log") {
    console.log("selection:", figma.currentPage.selection);
  }
  if (message.event === "click") {
    const onCloseMessage = createButton(message.buttonId, message.pluginConfig);
    figma.closePlugin(onCloseMessage);
  }
};
