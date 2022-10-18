import { Theme } from "../../app/data/enums";
import { CreateHoverVariant } from "./../../app/data/types";
import { setArrowFillsAndStrokes } from "./setArrowFillsAndStrokes";
import { setAutoLayout } from "./setAutoLayout";
import { setButtonHoverProperties } from "./setButtonHoverProperties";

export const createHoverVariant: CreateHoverVariant = (
  buttonComponent,
  buttonProperties,
  buttonTextProperties,
  currentTextComponentPropertyReference,
  arrowProperties,
  pluginConfig
) => {
  const { outline, dark, hover } = pluginConfig;

  if (!hover) return buttonComponent;

  const theme = dark ? Theme.Dark : Theme.Light;

  buttonComponent.deleteComponentProperty(
    currentTextComponentPropertyReference
  );
  setAutoLayout(buttonComponent, buttonProperties.paddingsOnHover?.default);
  const buttonComponentHover = buttonComponent.clone();
  setAutoLayout(buttonComponentHover, buttonProperties.paddingsOnHover?.hover);

  const button = buttonComponent.children[0] as FrameNode;
  const buttonText = button.children[0] as FrameNode;
  const buttonHover = buttonComponentHover.children[0] as FrameNode;
  const buttonTextHover = buttonHover.children[0] as TextNode;

  setButtonHoverProperties(buttonHover, buttonProperties, pluginConfig);

  buttonComponent.name = "Hover=false";
  buttonComponentHover.name = "Hover=true";
  const buttonComponentSet = figma.combineAsVariants(
    [buttonComponent, buttonComponentHover],
    figma.currentPage
  );

  buttonComponentSet.name = buttonProperties.name;
  setAutoLayout(buttonComponentSet, [16, 16, 16, 16], 16);

  const buttonSetTextProperty = buttonComponentSet.addComponentProperty(
    "Text",
    "TEXT",
    buttonTextProperties.defaultText
  );
  buttonText.componentPropertyReferences = {
    characters: buttonSetTextProperty,
  } as SceneNodeMixin["componentPropertyReferences"];
  buttonTextHover.componentPropertyReferences = {
    characters: buttonSetTextProperty,
  } as SceneNodeMixin["componentPropertyReferences"];

  const arrowNodeHover = buttonHover.children[1] as FrameNode;
  const arrowVectorHover = arrowNodeHover
    ? (arrowNodeHover.children[0] as VectorNode)
    : null;

  if (arrowVectorHover && arrowProperties?.vectorOffset) {
    const { vectorOffset } = arrowProperties;
    arrowVectorHover.x = vectorOffset.hover.x;
    arrowVectorHover.y = vectorOffset.hover.y;
  }

  if (outline && buttonTextProperties.fills[theme].outline) {
    buttonTextHover.fills =
      buttonTextProperties.fills[theme].outline.hover ||
      buttonTextProperties.fills[theme].outline.default;
  }

  setArrowFillsAndStrokes(
    arrowVectorHover,
    pluginConfig,
    arrowProperties,
    true
  );

  if (outline && buttonProperties.strokes) {
    buttonHover.strokes =
      buttonProperties.strokes.fills[theme].hover ||
      buttonProperties.strokes.fills[theme].default;
  }

  return buttonComponentSet;
};
