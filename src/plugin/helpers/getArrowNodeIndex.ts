import { Button } from "./../../app/data/enums";

export const getArrowNodeIndex = (buttonId: Button) => {
  if (buttonId === Button.Futuristic) return 4;
  if (buttonId === Button.Informative) return 2;
  return 1;
};
