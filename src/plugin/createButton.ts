import {
  buttonPropertiesClassic,
  buttonTextPropertiesClassic,
} from "../app/components/buttons/Classic/properties";
import { insertButtonToCanvas } from "./functions/insertButtonToCanvas";
import { setAutoLayout } from "./functions/setAutoLayout";
import { setButtonProperties } from "./functions/setButtonProperties";
import { setButtonTextPropertires } from "./functions/setButtonTextPropertires";

export const createButton = () => {
  const button = figma.createFrame();
  const buttonText = figma.createText();
  const buttonComponent = figma.createComponent();
  button.appendChild(buttonText);
  buttonComponent.appendChild(button);

  setButtonProperties(button, buttonPropertiesClassic);
  setAutoLayout(button, [16, 32, 16, 32], 10);
  setButtonTextPropertires(buttonText, buttonTextPropertiesClassic);
  setAutoLayout(buttonComponent, [2, 0, 2, 0]);

  const buttonComponentHover = buttonComponent.clone();
  buttonComponentHover.paddingTop = 0;
  buttonComponentHover.paddingBottom = 4;
  const buttonHover = buttonComponentHover.children[0] as FrameNode;
  const buttonTextHover = buttonHover.children[0] as TextNode;
  buttonHover.fills = buttonPropertiesClassic.fills.hover;
  buttonHover.effects = buttonPropertiesClassic.effects.hover;

  buttonComponent.name = "Hover=false";
  buttonComponentHover.name = "Hover=true";
  const buttonComponentSet = figma.combineAsVariants(
    [buttonComponent, buttonComponentHover],
    figma.currentPage
  );

  buttonComponentSet.name = buttonPropertiesClassic.name;
  setAutoLayout(buttonComponentSet, [16, 16, 16, 16], 16);

  const textProperty = buttonComponentSet.addComponentProperty(
    "Text",
    "TEXT",
    buttonTextPropertiesClassic.defaultText
  );
  buttonText.componentPropertyReferences = {
    characters: textProperty,
  } as any;
  buttonTextHover.componentPropertyReferences = {
    characters: textProperty,
  } as any;

  return insertButtonToCanvas(buttonComponentSet);
};
