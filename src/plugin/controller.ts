figma.showUI(__html__, {
  width: 576,
  height: 504,
});

figma.ui.onmessage = (message) => {
  console.log("message:", message);
  figma.closePlugin("Button created");
};
