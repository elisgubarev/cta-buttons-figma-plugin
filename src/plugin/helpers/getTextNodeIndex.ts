import { Button } from "./../../app/data/enums";

export const getTextNodeIndex = (buttonId: Button) => {
  if (buttonId === Button.Futuristic) return 3;
  if (buttonId === Button.Informative) return 1;
  return 0;
};
