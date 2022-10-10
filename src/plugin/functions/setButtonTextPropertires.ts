import { SetButtonTextPropertires } from "../../app/data/types";

export const setButtonTextPropertires: SetButtonTextPropertires = (
  buttonText,
  buttonTextProperties,
  pluginConfig
) => {
  const { outline } = pluginConfig;

  buttonText.name = buttonTextProperties.defaultText;
  buttonText.fontName = buttonTextProperties.fontName;
  buttonText.characters = buttonTextProperties.defaultText;
  buttonText.fontSize = buttonTextProperties.fontSize;
  buttonText.lineHeight = buttonTextProperties.lineHeight;

  buttonText.fills = buttonTextProperties.fills.light.primary.default;

  if (outline && buttonTextProperties.fills.light.outline?.default) {
    buttonText.fills = buttonTextProperties.fills.light.outline.default;
  }

  if (buttonTextProperties.letterSpacing) {
    buttonText.letterSpacing = buttonTextProperties.letterSpacing;
  }

  if (buttonTextProperties.textCase) {
    buttonText.textCase = buttonTextProperties.textCase;
  }

  return buttonText;
};
