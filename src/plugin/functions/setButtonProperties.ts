import { setButtonOpacity } from "./setButtonOpacity";
import { overrideEffectsForOutlinedButton } from "./overrideEffectsForOutlinedButton";
import { Button, Theme } from "../../app/data/enums";
import { SetButtonProperties } from "../../app/data/types";

export const setButtonProperties: SetButtonProperties = (
  button,
  buttonProperties,
  pluginConfig,
  buttonId,
  nodeName
) => {
  const { outline, dark } = pluginConfig;
  const theme = dark ? Theme.Dark : Theme.Light;

  button.name = nodeName || "Button";

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
    (outline || buttonProperties.strokes.isForced) &&
    buttonId !== Button.Futuristic
  ) {
    button.strokes = buttonProperties.strokes.fills[theme].default;
    button.strokeWeight = buttonProperties.strokes.weight;
  }

  setButtonOpacity(pluginConfig, buttonProperties, button);

  return button;
};
