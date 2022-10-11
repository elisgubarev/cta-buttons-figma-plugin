import { Theme } from "../../app/data/enums";
import { fills } from "../../app/data/global_properties/fills";
import { CreateArrow } from "../../app/data/types";

export const createArrow: CreateArrow = (arrowPropeties, pluginConfig) => {
  const { vectorPaths, frameSize, vectorOffset } = arrowPropeties;
  const { outline, dark } = pluginConfig;
  const theme = dark ? Theme.Dark : Theme.Light;

  const arrowNode = figma.createFrame();
  const arrowVector = figma.createVector();
  arrowNode.appendChild(arrowVector);

  arrowNode.name = "Arrow";
  arrowNode.fills = [];
  arrowVector.fills = fills.white.default;
  arrowVector.vectorPaths = vectorPaths;
  arrowVector.strokes = [];
  arrowNode.resize(frameSize.width, frameSize.height);

  if (vectorOffset) {
    arrowVector.x = vectorOffset.initial.x;
    arrowVector.y = vectorOffset.initial.y;
  }

  arrowVector.constraints = {
    horizontal: "SCALE",
    vertical: "SCALE",
  };
  arrowVector.constrainProportions = true;
  arrowNode.clipsContent = false;

  arrowVector.fills = arrowPropeties.fills[theme].primary.default;

  if (outline && arrowPropeties.fills[theme].outline?.default) {
    arrowVector.fills = arrowPropeties.fills[theme].outline.default;
  }

  return arrowNode;
};
