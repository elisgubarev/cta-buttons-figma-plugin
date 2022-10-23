import { Button, State, Theme, Type } from "./../../app/data/enums";
import { ButtonProperties, PluginConfig } from "./../../app/data/types";

export const addPropertiesForFuturistic = (
  button: FrameNode,
  pluginConfig: PluginConfig,
  buttonId: Button,
  buttonProperties: ButtonProperties,
  isHover?: boolean
) => {
  if (buttonId !== Button.Futuristic) return button;
  const { dark, outline } = pluginConfig;
  const theme = dark ? Theme.Dark : Theme.Light;
  const typePath = outline ? Type.Outline : Type.Primary;
  const statePath = isHover ? State.Hover : State.Default;

  button.fills = [];
  const rectangleBig = button.children[0] as RectangleNode;
  rectangleBig.layoutPositioning = "ABSOLUTE";
  rectangleBig.resize(button.width - 12, button.height);
  rectangleBig.x = 0;
  rectangleBig.y = 0;
  rectangleBig.fills =
    buttonProperties.fills[theme][typePath][statePath] ||
    buttonProperties.fills[theme].primary.default;
  rectangleBig.constraints = {
    horizontal: "STRETCH",
    vertical: "STRETCH",
  };
  if (outline) {
    rectangleBig.strokes = buttonProperties.strokes.fills[theme].default;
    rectangleBig.strokeWeight = buttonProperties.strokes.weight;
    rectangleBig.strokeRightWeight = 0;
  }

  const rectangleTopRight = button.children[1] as RectangleNode;
  rectangleTopRight.layoutPositioning = "ABSOLUTE";
  rectangleTopRight.fills =
    buttonProperties.fills[theme][typePath][statePath] ||
    buttonProperties.fills[theme].primary.default;
  rectangleTopRight.resize(12, button.height - 12);
  rectangleTopRight.y = 0;
  rectangleTopRight.x = button.width - rectangleTopRight.width;
  rectangleTopRight.constraints = {
    horizontal: "MAX",
    vertical: "STRETCH",
  };
  if (outline) {
    rectangleTopRight.strokes = buttonProperties.strokes.fills[theme].default;
    rectangleTopRight.strokeWeight = buttonProperties.strokes.weight;
    rectangleTopRight.strokeLeftWeight = 0;
    rectangleTopRight.strokeBottomWeight = 0;
  }

  const rectangleBottomRight = button.children[2] as RectangleNode;
  rectangleBottomRight.layoutPositioning = "ABSOLUTE";
  rectangleBottomRight.fills =
    buttonProperties.fills[theme][typePath][statePath] ||
    buttonProperties.fills[theme].primary.default;
  rectangleBottomRight.resize(17, 17);
  rectangleBottomRight.x = button.width - 24;
  rectangleBottomRight.y = button.height - 12;
  rectangleBottomRight.strokes = [];
  rectangleBottomRight.constraints = {
    horizontal: "MAX",
    vertical: "MAX",
  };
  rectangleBottomRight.rotation = 45;
  if (outline) {
    rectangleBottomRight.strokes =
      buttonProperties.strokes.fills[theme].default;
    rectangleBottomRight.strokeWeight = buttonProperties.strokes.weight;
    rectangleBottomRight.strokeLeftWeight = 0;
    rectangleBottomRight.strokeTopWeight = 0;
    rectangleBottomRight.strokeRightWeight = 0;
  }
};
