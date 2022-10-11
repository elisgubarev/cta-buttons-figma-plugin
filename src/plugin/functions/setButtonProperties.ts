import { SetButtonProperties } from "../../app/data/types";

export const setButtonProperties: SetButtonProperties = (
  button,
  buttonProperties,
  pluginConfig
) => {
  const { outline } = pluginConfig;
  button.name = "Button";

  button.fills = buttonProperties.fills.light.primary.default;

  if (outline && buttonProperties.fills.light.outline?.default) {
    button.fills = buttonProperties.fills.light.outline.default;
  }

  if (buttonProperties.cornerRadius) {
    button.cornerRadius = buttonProperties.cornerRadius;
  }

  if (buttonProperties.effects) {
    button.effects = buttonProperties.effects.light.default;
  }

  if (outline && buttonProperties.strokes) {
    button.strokes = buttonProperties.strokes.fills.light.default;
    button.strokeWeight = buttonProperties.strokes.weight;
  }

  return button;
};
