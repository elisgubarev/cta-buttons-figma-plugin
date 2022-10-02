import { createButton } from "./createButton";

figma.showUI(__html__, {
  width: 576,
  height: 504,
});

Promise.all([
  figma.loadFontAsync({ family: "Lato", style: "Bold" }),
  figma.loadFontAsync({ family: "Montserrat", style: "Bold" }),
])
  .then(() => {
    console.log("Fonts loaded");
  })
  .catch(() => {
    console.log("Error, couldnt load fonts");
  });

figma.ui.onmessage = (message) => {
  if (message === "dev-log") {
    console.log("selection:", figma.currentPage.selection);
  }
  if (message.event === "click") {
    const onCloseMessage = createButton(message.buttonId);
    figma.closePlugin(onCloseMessage);
  }
};
