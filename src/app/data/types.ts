import { Button, Theme } from "./enums";

export interface OnClick {
  (event?: React.MouseEvent<HTMLElement>): void;
}

type Paddings = [number, number, number, number];

export interface FrameSize {
  width: number;
  height: number;
}

export interface Coordinates {
  x: number;
  y: number;
}

export interface ButtonProperties {
  name: string;
  fills: {
    [Theme.Light]: {
      primary: {
        default: readonly Paint[];
        hover?: readonly Paint[];
      };
      outline?: {
        default: readonly Paint[];
        hover?: readonly Paint[];
      };
    };
    [Theme.Dark]: {
      primary: {
        default: readonly Paint[];
        hover?: readonly Paint[];
      };
      outline?: {
        default: readonly Paint[];
        hover?: readonly Paint[];
      };
    };
  };
  paddings: Paddings;
  itemSpacing?: number;
  effects?: {
    [Theme.Light]: {
      default: readonly Effect[];
      hover?: readonly Effect[];
    };
    [Theme.Dark]: {
      default: readonly Effect[];
      hover?: readonly Effect[];
    };
    ifOutline?: {
      [Theme.Light]?: {
        default: readonly Effect[];
        hover?: readonly Effect[];
      };
      [Theme.Dark]?: {
        default: readonly Effect[];
        hover?: readonly Effect[];
      };
    };
  };
  cornerRadius?: number;
  paddingsOnHover?: {
    default: Paddings;
    hover: Paddings;
  };
  strokes?: {
    fills: {
      [Theme.Light]: {
        default: readonly Paint[];
        hover?: readonly Paint[];
      };
      [Theme.Dark]: {
        default: readonly Paint[];
        hover?: readonly Paint[];
      };
    };
    weight: number;
    isForced?: boolean;
  };
  opacity?: {
    [Theme.Light]: {
      primary: {
        default: number;
        hover?: number;
      };
      outline?: {
        default: number;
        hover?: number;
      };
    };
    [Theme.Dark]: {
      primary: {
        default: number;
        hover?: number;
      };
      outline?: {
        default: number;
        hover?: number;
      };
    };
  };
}

export interface ButtonTextProperties {
  fontName: FontName;
  defaultText: string;
  fontSize: number;
  lineHeight: LineHeight;
  fills: {
    [Theme.Light]: {
      primary: {
        default: readonly Paint[];
        hover?: readonly Paint[];
      };
      outline?: {
        default: readonly Paint[];
        hover?: readonly Paint[];
      };
    };
    [Theme.Dark]: {
      primary: {
        default: readonly Paint[];
        hover?: readonly Paint[];
      };
      outline?: {
        default: readonly Paint[];
        hover?: readonly Paint[];
      };
    };
  };
  letterSpacing?: LetterSpacing;
  textCase?: TextCase;
}

export interface ArrowPropeties {
  fills: {
    [Theme.Light]: {
      primary: {
        default: readonly Paint[];
        hover?: readonly Paint[];
      };
      outline?: {
        default: readonly Paint[];
        hover?: readonly Paint[];
      };
    };
    [Theme.Dark]: {
      primary: {
        default: readonly Paint[];
        hover?: readonly Paint[];
      };
      outline?: {
        default: readonly Paint[];
        hover?: readonly Paint[];
      };
    };
  };
  vectorPaths: VectorPaths;
  frameSize: FrameSize;
  vectorOffset?: {
    initial: Coordinates;
    hover: Coordinates;
  };
  strokes?: {
    [Theme.Light]: {
      primary: {
        default: readonly Paint[];
        hover?: readonly Paint[];
      };
      outline?: {
        default: readonly Paint[];
        hover?: readonly Paint[];
      };
    };
    [Theme.Dark]: {
      primary: {
        default: readonly Paint[];
        hover?: readonly Paint[];
      };
      outline?: {
        default: readonly Paint[];
        hover?: readonly Paint[];
      };
    };
    weight: number;
  };
}

export type ButtonNode = ComponentNode | ComponentSetNode;

export interface InsertButtonToCanvas {
  (button: ButtonNode): string;
}

export type AutoLayoutNode =
  | FrameNode
  | ComponentNode
  | ComponentSetNode
  | InstanceNode;

export interface SetAutoLayout {
  (
    node: AutoLayoutNode,
    padding?: Paddings,
    itemSpacing?: number
  ): AutoLayoutNode;
}

export interface SetButtonProperties {
  (
    button: FrameNode,
    buttonProperties: ButtonProperties,
    pluginConfig: PluginConfig,
    buttonId: Button
  ): FrameNode;
}

export interface SetButtonTextPropertires {
  (
    buttonText: TextNode,
    buttonTextProperties: ButtonTextProperties,
    pluginConfig: PluginConfig
  ): TextNode;
}

export type MapPropertiesToButtonIds = {
  [key in Button]: {
    button: ButtonProperties;
    text: ButtonTextProperties;
    arrow?: ArrowPropeties;
  };
};

export interface SetButtonHoverProperties {
  (
    buttonHover: FrameNode,
    buttonProperties: ButtonProperties,
    pluginConfig: PluginConfig
  ): FrameNode;
}

export type Color<T extends string> = Pick<
  {
    [variation: string]: readonly Paint[];
  },
  T
>;

export type Shadow<T extends string> = Pick<
  {
    [variation: string]: readonly Effect[];
  },
  T
>;

export interface PluginConfig {
  hover: boolean;
  arrow: boolean;
  outline: boolean;
  dark: boolean;
}

export interface SetPluginConfig {
  (updatedConfig: PluginConfig): void;
}

export type Event = "click" | "log" | "saveConfig";

export interface PluginMessage {
  event: Event;
  buttonId?: Button;
  pluginConfig?: PluginConfig;
}

export type PluginUIEventType = "dataLoaded";

export interface PluginUIEventData {
  pluginMessage: {
    type: PluginUIEventType;
    pluginConfig?: PluginConfig;
  };
}

export type PluginUIEvent = MessageEvent<PluginUIEventData>;

export interface CreateHoverVariant {
  (
    buttonComponent: ComponentNode,
    buttonProperties: ButtonProperties,
    buttonTextProperties: ButtonTextProperties,
    currentTextComponentPropertyReference: string,
    arrowProperties: ArrowPropeties,
    pluginConfig: PluginConfig,
    buttonId: Button
  ): ButtonNode;
}

export interface CreateArrow {
  (
    arrowPropeties: ArrowPropeties,
    pluginConfig: PluginConfig,
    buttonNode: FrameNode
  ): FrameNode;
}

export interface OverrideEffectsForOutlinedButton {
  (
    pluginConfig: PluginConfig,
    buttonProperties: ButtonProperties,
    buttonNode: FrameNode,
    isHover?: boolean
  ): FrameNode;
}

export interface SetButtonOpacity {
  (
    pluginConfig: PluginConfig,
    buttonProperties: ButtonProperties,
    buttonNode: FrameNode,
    isHover?: boolean
  ): FrameNode;
}

export interface SetArrowFillsAndStrokes {
  (
    arrowVector: VectorNode,
    pluginConfig: PluginConfig,
    arrowProperties: ArrowPropeties,
    isHover?: boolean
  ): VectorNode;
}
