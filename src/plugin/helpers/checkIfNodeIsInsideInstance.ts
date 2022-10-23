import { CheckIfNodeIsInsideInstance } from "../../app/data/types";

export const checkIfNodeIsInsideInstance: CheckIfNodeIsInsideInstance = (
  node
) => {
  if (!node || !node.parent) return false;
  if (node.parent.type == "INSTANCE") return true;
  return checkIfNodeIsInsideInstance(node.parent);
};
