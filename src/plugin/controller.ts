figma.showUI(__html__, {
  width: 576,
  height: 504,
});

figma.ui.onmessage = (message) => {
  if (message === "dev-log") {
    console.log("selection:", figma.currentPage.selection);
  }
  if (message === "click") {
    figma.closePlugin("Button created");
  }
};
