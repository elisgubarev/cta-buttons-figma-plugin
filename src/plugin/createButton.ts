import { Button } from "../app/data/enums";
import { mapPropertiesToButtonIds } from "../app/data/maps";
import { ButtonNode, PluginConfig } from "../app/data/types";
import { createHoverVariant } from "./functions/createHoverVariant";
import { insertButtonToCanvas } from "./functions/insertButtonToCanvas";
import { setAutoLayout } from "./functions/setAutoLayout";
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

  setAutoLayout(buttonComponent);
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
    returnedButtonObject = createHoverVariant(
      returnedButtonObject,
      buttonProperties,
      buttonTextProperties,
      {
        text: singleButtonTextProperty,
      }
    );
  }

  return insertButtonToCanvas(returnedButtonObject);
};
