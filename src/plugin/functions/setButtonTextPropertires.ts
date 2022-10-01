import { SetButtonTextPropertires } from "../../app/data/types";

export const setButtonTextPropertires: SetButtonTextPropertires = (
  buttonText,
  buttonTextProperties
) => {
  buttonText.name = buttonTextProperties.defaultText;
  buttonText.fontName = buttonTextProperties.fontName;
  buttonText.characters = buttonTextProperties.defaultText;
  buttonText.fontSize = buttonTextProperties.fontSize;
  buttonText.lineHeight = buttonTextProperties.lineHeight;
  buttonText.fills = buttonTextProperties.fills.default;

  return buttonText;
};
