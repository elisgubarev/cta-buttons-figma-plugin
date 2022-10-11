import { Theme } from "../../app/data/enums";
import { SetButtonHoverProperties } from "../../app/data/types";

export const setButtonHoverProperties: SetButtonHoverProperties = (
  buttonHover,
  buttonProperties,
  pluginConfig
) => {
  const { outline, dark } = pluginConfig;
  const theme = dark ? Theme.Dark : Theme.Light;

  if (buttonProperties.fills[theme].primary.hover) {
    buttonHover.fills = buttonProperties.fills[theme].primary.hover;
  }

  if (outline && buttonProperties.fills[theme].outline) {
    buttonHover.fills =
      buttonProperties.fills[theme].outline.hover ||
      buttonProperties.fills[theme].outline.default;
  }

  if (buttonProperties.effects?.[theme].hover) {
    buttonHover.effects = buttonProperties.effects?.[theme].hover;
  }

  return buttonHover;
};
