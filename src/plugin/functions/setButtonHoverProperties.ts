import { SetButtonHoverProperties } from "../../app/data/types";

export const setButtonHoverProperties: SetButtonHoverProperties = (
  buttonHover,
  buttonProperties,
  pluginConfig
) => {
  const { outline } = pluginConfig;

  if (buttonProperties.fills.light.primary.hover) {
    buttonHover.fills = buttonProperties.fills.light.primary.hover;
  }

  if (outline && buttonProperties.fills.light.outline) {
    buttonHover.fills =
      buttonProperties.fills.light.outline.hover ||
      buttonProperties.fills.light.outline.default;
  }

  if (buttonProperties.effects?.hover) {
    buttonHover.effects = buttonProperties.effects?.hover;
  }

  return buttonHover;
};
