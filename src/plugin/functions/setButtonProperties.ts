import { SetButtonProperties } from "../../app/types/types";

export const setButtonProperties: SetButtonProperties = (
  button,
  buttonProperties
) => {
  button.name = "Button";
  button.fills = buttonProperties.fills.default;

  if (buttonProperties.cornerRadius) {
    button.cornerRadius = buttonProperties.cornerRadius;
  }

  if (buttonProperties.effects) {
    button.effects = buttonProperties.effects.default;
  }

  return button;
};