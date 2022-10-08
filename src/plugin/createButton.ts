import { Button } from "../app/data/enums";
import { mapPropertiesToButtonIds } from "../app/data/maps";
import { ButtonNode, PluginConfig } from "../app/data/types";
import { insertButtonToCanvas } from "./functions/insertButtonToCanvas";
import { setAutoLayout } from "./functions/setAutoLayout";
import { setButtonHoverProperties } from "./functions/setButtonHoverProperties";
import { setButtonProperties } from "./functions/setButtonProperties";
import { setButtonTextPropertires } from "./functions/setButtonTextPropertires";

export const createButton = (buttonId: Button, pluginConfig: PluginConfig) => {
  const { hover, arrow, outline, dark } = pluginConfig;
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
  buttonComponent.name = buttonProperties.name;

  let returnedButtonObject: ButtonNode = buttonComponent;

  const singleButtonTextProperty = returnedButtonObject.addComponentProperty(
    "Text",
    "TEXT",
    buttonTextProperties.defaultText
  );
  buttonText.componentPropertyReferences = {
    characters: singleButtonTextProperty,
  } as SceneNodeMixin["componentPropertyReferences"];

  if (hover) {
    returnedButtonObject.deleteComponentProperty(singleButtonTextProperty);
    const buttonComponentHover = buttonComponent.clone();
    setAutoLayout(
      buttonComponentHover,
      buttonProperties.paddingsOnHover?.hover
    );

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
    returnedButtonObject = buttonComponentSet;
    const buttonSetTextProperty = returnedButtonObject.addComponentProperty(
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
  }

  return insertButtonToCanvas(returnedButtonObject);
};
