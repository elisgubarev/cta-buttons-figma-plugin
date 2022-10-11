import { Theme } from "../../app/data/enums";
import { SetButtonTextPropertires } from "../../app/data/types";

export const setButtonTextPropertires: SetButtonTextPropertires = (
  buttonText,
  buttonTextProperties,
  pluginConfig
) => {
  const { outline, dark } = pluginConfig;
  const theme = dark ? Theme.Dark : Theme.Light;

  buttonText.name = buttonTextProperties.defaultText;
  buttonText.fontName = buttonTextProperties.fontName;
  buttonText.characters = buttonTextProperties.defaultText;
  buttonText.fontSize = buttonTextProperties.fontSize;
  buttonText.lineHeight = buttonTextProperties.lineHeight;

  buttonText.fills = buttonTextProperties.fills[theme].primary.default;

  if (outline && buttonTextProperties.fills[theme].outline?.default) {
    buttonText.fills = buttonTextProperties.fills[theme].outline.default;
  }

  if (buttonTextProperties.letterSpacing) {
    buttonText.letterSpacing = buttonTextProperties.letterSpacing;
  }

  if (buttonTextProperties.textCase) {
    buttonText.textCase = buttonTextProperties.textCase;
  }

  return buttonText;
};
