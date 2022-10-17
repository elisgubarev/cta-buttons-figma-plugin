import { Theme } from "../../app/data/enums";
import { white } from "../../app/data/figma_properties/colors/white";
import { CreateArrow } from "../../app/data/types";
import { setArrowFillsAndStrokes } from "./setArrowFillsAndStrokes";

export const createArrow: CreateArrow = (arrowProperties, pluginConfig) => {
  const { vectorPaths, frameSize, vectorOffset } = arrowProperties;
  const { outline, dark } = pluginConfig;
  const theme = dark ? Theme.Dark : Theme.Light;

  const arrowNode = figma.createFrame();
  const arrowVector = figma.createVector();
  arrowNode.appendChild(arrowVector);

  arrowNode.name = "Arrow";
  arrowNode.fills = [];
  arrowVector.fills = white.default;
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

  setArrowFillsAndStrokes(arrowVector, pluginConfig, arrowProperties);

  return arrowNode;
};
