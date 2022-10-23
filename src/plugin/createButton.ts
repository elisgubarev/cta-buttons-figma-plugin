import { buttonTextPropertiesInformativeTag } from "./../app/components/buttons/Informative/propertiesTag";
import { buttonPropertiesInformativeTag } from "../app/components/buttons/Informative/propertiesTag";
import { Button } from "../app/data/enums";
import { mapPropertiesToButtonIds } from "../app/data/maps";
import { ButtonNode, PluginConfig } from "../app/data/types";
import { addPropertiesForFuturistic } from "./functions/addPropertiesForFuturistic";
import { createArrow } from "./functions/createArrow";
import { createHoverVariant } from "./functions/createHoverVariant";
import { createTag } from "./functions/createTag";
import { insertButtonToCanvas } from "./functions/insertButtonToCanvas";
import { setAutoLayout } from "./functions/setAutoLayout";
import { setButtonProperties } from "./functions/setButtonProperties";
import { setButtonTextPropertires } from "./functions/setButtonTextPropertires";

export const createButton = (buttonId: Button, pluginConfig: PluginConfig) => {
  const buttonProperties = mapPropertiesToButtonIds[buttonId].button;
  const buttonTextProperties = mapPropertiesToButtonIds[buttonId].text;
  const arrowProperties = mapPropertiesToButtonIds[buttonId].arrow;

  const button = figma.createFrame();
  const buttonText = figma.createText();
  const buttonComponent = figma.createComponent();
  button.appendChild(buttonText);
  buttonComponent.appendChild(button);
  setButtonProperties(button, buttonProperties, pluginConfig, buttonId);
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

  createArrow(arrowProperties, pluginConfig, button);

  if (buttonId === Button.Futuristic) {
    button.insertChild(0, figma.createRectangle());
    button.insertChild(1, figma.createRectangle());
    button.insertChild(2, figma.createRectangle());
    addPropertiesForFuturistic(
      button,
      pluginConfig,
      buttonId,
      buttonProperties
    );
  }

  let tagTextProperty: string;
  if (buttonId === Button.Informative) {
    tagTextProperty = returnedButtonObject.addComponentProperty(
      "Tag text",
      "TEXT",
      buttonTextPropertiesInformativeTag.defaultText
    );
    createTag(
      buttonPropertiesInformativeTag,
      buttonTextPropertiesInformativeTag,
      pluginConfig,
      buttonId,
      tagTextProperty,
      button
    );
  }

  returnedButtonObject = createHoverVariant(
    returnedButtonObject,
    buttonProperties,
    buttonTextProperties,
    {
      button: buttonTextComponentProperty,
      tag: tagTextProperty,
    },
    arrowProperties,
    pluginConfig,
    buttonId
  );

  return insertButtonToCanvas(returnedButtonObject);
};
