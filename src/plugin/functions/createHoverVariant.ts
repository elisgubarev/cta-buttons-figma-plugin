import { CreateHoverVariant } from "./../../app/data/types";
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
  const { outline } = pluginConfig;

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

  if (arrowNodeHover && arrowProperties?.vectorOffset) {
    const { vectorOffset } = arrowProperties;
    const arrowVectorHover = arrowNodeHover.children[0] as VectorNode;
    arrowVectorHover.x = vectorOffset.hover.x;
    arrowVectorHover.y = vectorOffset.hover.y;
  }

  if (outline && buttonTextProperties.fills.light.outline) {
    buttonTextHover.fills =
      buttonTextProperties.fills.light.outline.hover ||
      buttonTextProperties.fills.light.outline.default;
  }

  if (outline && arrowNodeHover && arrowProperties.fills.light.outline) {
    const arrowVectorHover = arrowNodeHover.children[0] as VectorNode;
    arrowVectorHover.fills =
      arrowProperties.fills.light.outline.hover ||
      arrowProperties.fills.light.outline.default;
  }

  if (outline && buttonProperties.strokes) {
    buttonHover.strokes =
      buttonProperties.strokes.fills.light.hover ||
      buttonProperties.strokes.fills.light.default;
  }

  return buttonComponentSet;
};
