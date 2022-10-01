import { ButtonTextProperties } from "../../app/types/types";

export const setButtonTextPropertires = (
  buttonText: TextNode,
  buttonTextProperties: ButtonTextProperties
) => {
  buttonText.name = buttonTextProperties.defaultText;
  buttonText.fontName = buttonTextProperties.fontName;
  buttonText.characters = buttonTextProperties.defaultText;
  buttonText.fontSize = buttonTextProperties.fontSize;
  buttonText.lineHeight = buttonTextProperties.lineHeight;
  buttonText.fills = buttonTextProperties.fills.default;

  return buttonText;
};
