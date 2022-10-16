import { Button } from "../app/data/enums";
import { mapPropertiesToButtonIds } from "../app/data/maps";
import { ButtonNode, PluginConfig } from "../app/data/types";
import { createArrow } from "./functions/createArrow";
import { createHoverVariant } from "./functions/createHoverVariant";
import { insertButtonToCanvas } from "./functions/insertButtonToCanvas";
import { setAutoLayout } from "./functions/setAutoLayout";
import { setButtonProperties } from "./functions/setButtonProperties";
import { setButtonTextPropertires } from "./functions/setButtonTextPropertires";

export const createButton = (buttonId: Button, pluginConfig: PluginConfig) => {
  const { hover, arrow } = pluginConfig;
  let arrowNode: FrameNode;
  const buttonProperties = mapPropertiesToButtonIds[buttonId].button;
  const buttonTextProperties = mapPropertiesToButtonIds[buttonId].text;
  const arrowProperties = mapPropertiesToButtonIds[buttonId].arrow;

  const button = figma.createFrame();
  const buttonText = figma.createText();
  const buttonComponent = figma.createComponent();
  button.appendChild(buttonText);
  buttonComponent.appendChild(button);
  setButtonProperties(button, buttonProperties, pluginConfig);
  setButtonTextPropertires(buttonText, buttonTextProperties, pluginConfig);
  setAutoLayout(
    button,
    buttonProperties.paddings,
    buttonProperties.itemSpacing
  );

  setAutoLayout(buttonComponent);
  buttonComponent.name = buttonProperties.name;
  buttonComponent.fills = [];

  let returnedButtonObject: ButtonNode = buttonComponent;

  const buttonTextComponentProperty = returnedButtonObject.addComponentProperty(
    "Text",
    "TEXT",
    buttonTextProperties.defaultText
  );
  buttonText.componentPropertyReferences = {
    characters: buttonTextComponentProperty,
  } as SceneNodeMixin["componentPropertyReferences"];

  if (arrow && arrowProperties) {
    arrowNode = createArrow(arrowProperties, pluginConfig);
    button.appendChild(arrowNode);
  }

  if (hover) {
    returnedButtonObject = createHoverVariant(
      returnedButtonObject,
      buttonProperties,
      buttonTextProperties,
      buttonTextComponentProperty,
      arrowProperties,
      pluginConfig
    );
  }

  return insertButtonToCanvas(returnedButtonObject);
};
