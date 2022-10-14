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
    [Theme.Dark]?: {
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
    [Theme.Dark]?: {
      default: readonly Effect[];
      hover?: readonly Effect[];
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
      [Theme.Dark]?: {
        default: readonly Paint[];
        hover?: readonly Paint[];
      };
    };
    weight: number;
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
    [Theme.Dark]?: {
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
    [Theme.Dark]?: {
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
    pluginConfig: PluginConfig
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

export interface Fills {
  [color: string]: {
    default: readonly Paint[];
    hover?: readonly Paint[];
    hover2?: readonly Paint[];
    hover3?: readonly Paint[];
    hover4?: readonly Paint[];
  };
}

export interface Shadows {
  [shadow: string]: {
    default: readonly Effect[];
    hover?: readonly Effect[];
  };
}

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
    pluginConfig: PluginConfig
  ): ComponentSetNode;
}

export interface CreateArrow {
  (arrowPropeties: ArrowPropeties, pluginConfig: PluginConfig): FrameNode;
}
