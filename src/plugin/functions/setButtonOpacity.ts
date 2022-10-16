import { Theme } from "../../app/data/enums";
import { SetButtonOpacity } from "./../../app/data/types";

export const setButtonOpacity: SetButtonOpacity = (
  pluginConfig,
  buttonProperties,
  buttonNode,
  isHover
) => {
  const { outline, dark } = pluginConfig;
  const theme = dark ? Theme.Dark : Theme.Light;

  if (!buttonProperties.opacity) return buttonNode;

  const opacityProperty = buttonProperties.opacity[theme];

  if (!outline) {
    buttonNode.opacity =
      opacityProperty.primary?.[isHover ? "hover" : "default"] ||
      opacityProperty.primary.default;
  }

  if (outline && opacityProperty.outline) {
    buttonNode.opacity =
      opacityProperty.outline?.[isHover ? "hover" : "default"] ||
      opacityProperty.outline.default;
  }

  return buttonNode;
};
