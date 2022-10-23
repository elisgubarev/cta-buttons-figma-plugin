import { Button, Theme } from "../../app/data/enums";
import { CreateHoverVariant } from "./../../app/data/types";
import { addPropertiesForFuturistic } from "./addPropertiesForFuturistic";
import { setArrowFillsAndStrokes } from "./setArrowFillsAndStrokes";
import { setAutoLayout } from "./setAutoLayout";
import { setButtonHoverProperties } from "./setButtonHoverProperties";

export const createHoverVariant: CreateHoverVariant = (
  buttonComponent,
  buttonProperties,
  buttonTextProperties,
  currentTextComponentPropertyReference,
  arrowProperties,
  pluginConfig,
  buttonId
) => {
  const { outline, dark, hover } = pluginConfig;
  const buttonTextIndex = buttonId === Button.Futuristic ? 3 : 0;
  const arrowNodeHoverIndex = buttonId === Button.Futuristic ? 4 : 1;

  if (!hover) return buttonComponent;

  const theme = dark ? Theme.Dark : Theme.Light;

  buttonComponent.deleteComponentProperty(
    currentTextComponentPropertyReference
  );
  setAutoLayout(buttonComponent, buttonProperties.paddingsOnHover?.default);
  const buttonComponentHover = buttonComponent.clone();
  setAutoLayout(buttonComponentHover, buttonProperties.paddingsOnHover?.hover);

  const button = buttonComponent.children[0] as FrameNode;
  const buttonText = button.children[buttonTextIndex] as FrameNode;
  const buttonHover = buttonComponentHover.children[0] as FrameNode;
  const buttonTextHover = buttonHover.children[buttonTextIndex] as TextNode;

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

  const arrowNodeHover = buttonHover.children[arrowNodeHoverIndex] as FrameNode;
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

  if (outline && buttonProperties.strokes && buttonId !== Button.Futuristic) {
    buttonHover.strokes =
      buttonProperties.strokes.fills[theme].hover ||
      buttonProperties.strokes.fills[theme].default;
  }

  addPropertiesForFuturistic(
    buttonHover,
    pluginConfig,
    buttonId,
    buttonProperties,
    true
  );

  return buttonComponentSet;
};
