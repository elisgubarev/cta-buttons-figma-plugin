import { createButton } from "./createButton";

figma.showUI(__html__, {
  width: 576,
  height: 504,
});

figma
  .loadFontAsync({ family: "Lato", style: "Bold" })
  .then(() => {
    console.log("Font loaded");
  })
  .catch(() => {
    console.log("Error, couldnt load font");
  });

figma.ui.onmessage = (message) => {
  if (message === "dev-log") {
    console.log("selection:", figma.currentPage.selection);
  }
  if (message === "click") {
    const onCloseMessage = createButton();
    figma.closePlugin(onCloseMessage);
  }
};
