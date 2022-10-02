import { Button } from "../app/data/enums";
import { mapPropertiesToButtonIds } from "../app/data/maps";
import { insertButtonToCanvas } from "./functions/insertButtonToCanvas";
import { setAutoLayout } from "./functions/setAutoLayout";
import { setButtonHoverProperties } from "./functions/setButtonHoverProperties";
import { setButtonProperties } from "./functions/setButtonProperties";
import { setButtonTextPropertires } from "./functions/setButtonTextPropertires";

export const createButton = (buttonId: Button) => {
  const buttonProperties = mapPropertiesToButtonIds[buttonId].button;
  const buttonTextProperties = mapPropertiesToButtonIds[buttonId].text;

  const button = figma.createFrame();
  const buttonText = figma.createText();
  const buttonComponent = figma.createComponent();
  button.appendChild(buttonText);
  buttonComponent.appendChild(button);
  setButtonProperties(button, buttonProperties);
  setButtonTextPropertires(buttonText, buttonTextProperties);
  setAutoLayout(
    button,
    buttonProperties.paddings,
    buttonProperties.itemSpacing
  );

  setAutoLayout(buttonComponent, buttonProperties.paddingsOnHover?.default);
  const buttonComponentHover = buttonComponent.clone();
  setAutoLayout(buttonComponentHover, buttonProperties.paddingsOnHover?.hover);

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

  const textProperty = buttonComponentSet.addComponentProperty(
    "Text",
    "TEXT",
    buttonTextProperties.defaultText
  );
  buttonText.componentPropertyReferences = {
    characters: textProperty,
  } as SceneNodeMixin["componentPropertyReferences"];
  buttonTextHover.componentPropertyReferences = {
    characters: textProperty,
  } as SceneNodeMixin["componentPropertyReferences"];

  return insertButtonToCanvas(buttonComponentSet);
};
