import { Button } from "../../app/data/enums";
import {
  ButtonProperties,
  ButtonTextProperties,
  PluginConfig,
} from "./../../app/data/types";
import { setAutoLayout } from "./setAutoLayout";
import { setButtonProperties } from "./setButtonProperties";
import { setButtonTextPropertires } from "./setButtonTextPropertires";

export const createTag = (
  tagProperties: ButtonProperties,
  tagTextProperties: ButtonTextProperties,
  pluginConfig: PluginConfig,
  buttonId: Button,
  textProperty: string,
  button: FrameNode
): FrameNode => {
  const tag = figma.createFrame();
  const tagText = figma.createText();
  tag.appendChild(tagText);

  setButtonProperties(tag, tagProperties, pluginConfig, buttonId, "Tag");
  setButtonTextPropertires(tagText, tagTextProperties, pluginConfig);
  setAutoLayout(tag, tagProperties.paddings, tagProperties.itemSpacing);

  button.insertChild(0, tag);

  tagText.componentPropertyReferences = {
    characters: textProperty,
  } as SceneNodeMixin["componentPropertyReferences"];

  return tag;
};
