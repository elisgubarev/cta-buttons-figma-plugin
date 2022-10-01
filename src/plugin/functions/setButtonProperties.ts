import { ButtonProperties } from "../../app/types/types";

export const setButtonProperties = (
  button: FrameNode,
  buttonProperties: ButtonProperties
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
