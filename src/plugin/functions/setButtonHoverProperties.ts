import { SetButtonHoverProperties } from "../../app/data/types";

export const setButtonHoverProperties: SetButtonHoverProperties = (
  buttonHover,
  buttonProperties
) => {
  buttonHover.fills = buttonProperties.fills.hover || buttonHover.fills;
  buttonHover.effects = buttonProperties.effects?.hover || buttonHover.effects;

  return buttonHover;
};
