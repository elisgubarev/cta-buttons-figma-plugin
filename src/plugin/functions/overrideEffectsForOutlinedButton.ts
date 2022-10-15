import { Theme } from "../../app/data/enums";
import { OverrideEffectsForOutlinedButton } from "./../../app/data/types";

export const overrideEffectsForOutlinedButton: OverrideEffectsForOutlinedButton =
  (pluginConfig, buttonProperties, buttonNode, isHover) => {
    const { effects } = buttonProperties;
    if (!effects) return buttonNode;

    const { outline, dark } = pluginConfig;
    const theme = dark ? Theme.Dark : Theme.Light;

    if (
      !(
        outline &&
        effects.ifOutline &&
        ((effects.ifOutline.light && !dark) || (effects.ifOutline.dark && dark))
      )
    ) {
      return buttonNode;
    }

    if (isHover && !effects.ifOutline[theme].hover) return buttonNode;

    buttonNode.effects =
      effects.ifOutline[theme][isHover ? "hover" : "default"];

    return buttonNode;
  };
