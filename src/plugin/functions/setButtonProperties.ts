import { overrideEffectsForOutlinedButton } from "./overrideEffectsForOutlinedButton";
import { Theme } from "../../app/data/enums";
import { SetButtonProperties } from "../../app/data/types";

export const setButtonProperties: SetButtonProperties = (
  button,
  buttonProperties,
  pluginConfig
) => {
  const { outline, dark } = pluginConfig;
  const theme = dark ? Theme.Dark : Theme.Light;

  button.name = "Button";

  button.fills = buttonProperties.fills[theme].primary.default;

  if (outline && buttonProperties.fills[theme].outline?.default) {
    button.fills = buttonProperties.fills[theme].outline.default;
  }

  if (buttonProperties.cornerRadius) {
    button.cornerRadius = buttonProperties.cornerRadius;
  }

  if (buttonProperties.effects) {
    button.effects = buttonProperties.effects[theme].default;
  }

  overrideEffectsForOutlinedButton(pluginConfig, buttonProperties, button);

  if (
    buttonProperties.strokes &&
    (outline || buttonProperties.strokes.isForced)
  ) {
    button.strokes = buttonProperties.strokes.fills[theme].default;
    button.strokeWeight = buttonProperties.strokes.weight;
  }

  return button;
};
