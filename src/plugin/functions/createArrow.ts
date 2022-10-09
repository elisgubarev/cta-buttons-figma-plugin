import { fills } from "../../app/data/global_properties/fills";
import { ArrowPropeties } from "../../app/data/types";

export const createArrow = (arrowPropeties: ArrowPropeties): FrameNode => {
  const { vectorPaths, frameSize, vectorOffset } = arrowPropeties;
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

  return arrowNode;
};
