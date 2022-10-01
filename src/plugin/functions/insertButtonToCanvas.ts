export const insertButtonToCanvas = (
  button: ComponentNode | ComponentSetNode
): string => {
  let onCloseMessage = "Button added to canvas";

  button.x = figma.viewport.center.x - button.width / 2;
  button.y = figma.viewport.center.y - button.height / 2;

  figma.currentPage.selection.forEach((node) => {
    if (node.type === "FRAME") {
      button.x = 24;
      button.y = 24;
      node.appendChild(button);
      onCloseMessage = `Button added to ${node.name}`;
      return;
    }
  });

  return onCloseMessage;
};
