import { SetButtonProperties } from "../../app/data/types";

export const setButtonProperties: SetButtonProperties = (
  button,
  buttonProperties
) => {
  button.name = "Button";
  button.fills = buttonProperties.fills.light.primary.default;

  if (buttonProperties.cornerRadius) {
    button.cornerRadius = buttonProperties.cornerRadius;
  }

  if (buttonProperties.effects) {
    button.effects = buttonProperties.effects.default;
  }

  return button;
};
