import { SetAutoLayout } from "../../app/data/types";

export const setAutoLayout: SetAutoLayout = (node, padding, itemSpacing) => {
  node.layoutMode = "HORIZONTAL";
  node.primaryAxisAlignItems = "CENTER";
  node.counterAxisAlignItems = "CENTER";
  node.primaryAxisSizingMode = "AUTO";
  node.counterAxisSizingMode = "AUTO";

  if (!padding) return node;

  node.paddingTop = padding[0];
  node.paddingRight = padding[1];
  node.paddingBottom = padding[2];
  node.paddingLeft = padding[3];

  node.itemSpacing = itemSpacing || 0;

  return node;
};
