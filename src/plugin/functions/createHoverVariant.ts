import {
  ArrowPropeties,
  ButtonProperties,
  ButtonTextProperties,
} from "../../app/data/types";
import { setAutoLayout } from "./setAutoLayout";
import { setButtonHoverProperties } from "./setButtonHoverProperties";

export const createHoverVariant = (
  buttonComponent: ComponentNode,
  buttonProperties: ButtonProperties,
  buttonTextProperties: ButtonTextProperties,
  currentTextComponentPropertyReference: string,
  arrowProperties: ArrowPropeties
): ComponentSetNode => {
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

  setButtonHoverProperties(buttonHover, buttonProperties);

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
    arrowNodeHover.children[0].x = vectorOffset.hover.x;
    arrowNodeHover.children[0].y = vectorOffset.hover.y;
  }

  return buttonComponentSet;
};
