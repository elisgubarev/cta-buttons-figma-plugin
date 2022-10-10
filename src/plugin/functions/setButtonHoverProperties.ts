import { SetButtonHoverProperties } from "../../app/data/types";

export const setButtonHoverProperties: SetButtonHoverProperties = (
  buttonHover,
  buttonProperties
) => {
  if (buttonProperties.fills.light.primary.hover) {
    buttonHover.fills = buttonProperties.fills.light.primary.hover;
  }
  if (buttonProperties.effects?.hover) {
    buttonHover.effects = buttonProperties.effects?.hover;
  }

  return buttonHover;
};
