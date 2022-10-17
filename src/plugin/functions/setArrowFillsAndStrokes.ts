import { Theme } from "../../app/data/enums";
import { SetArrowFillsAndStrokes } from "./../../app/data/types";

export const setArrowFillsAndStrokes: SetArrowFillsAndStrokes = (
  arrowVector,
  pluginConfig,
  arrowProperties,
  isHover
) => {
  if (!arrowVector) return null;

  const { outline, dark } = pluginConfig;
  const theme = dark ? Theme.Dark : Theme.Light;

  const primaryFills = arrowProperties.fills[theme].primary;
  const primaryStrokes = arrowProperties.strokes?.[theme].primary;
  const outlineFills = arrowProperties.fills[theme].outline;
  const outlineStrokes = arrowProperties.strokes?.[theme].outline;

  arrowVector.fills = primaryFills.default;

  if (outline && outlineFills) {
    arrowVector.fills = outlineFills.default;
  }

  if (primaryStrokes) {
    arrowVector.strokeWeight = arrowProperties.strokes.weight;
    arrowVector.strokes = primaryStrokes.default;
  }

  if (outline && outlineStrokes) {
    arrowVector.strokes = outlineStrokes.default;
  }

  if (!isHover) return arrowVector;

  arrowVector.fills = primaryFills.hover || primaryFills.default;

  if (outline && outlineFills) {
    arrowVector.fills = outlineFills.hover || outlineFills.default;
  }

  if (primaryStrokes) {
    arrowVector.strokes = primaryStrokes.hover || primaryStrokes.default;
  }

  if (outline && outlineStrokes) {
    arrowVector.strokes = outlineStrokes.hover || outlineStrokes.default;
  }

  return arrowVector;
};
