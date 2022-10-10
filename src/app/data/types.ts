import { Button } from "./enums";

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
    light: {
      primary: {
        default: readonly Paint[] | typeof figma.mixed;
        hover?: readonly Paint[] | typeof figma.mixed;
      };
      outline?: {
        default: readonly Paint[] | typeof figma.mixed;
        hover?: readonly Paint[] | typeof figma.mixed;
      };
    };
    dark?: {
      primary: {
        default: readonly Paint[] | typeof figma.mixed;
        hover?: readonly Paint[] | typeof figma.mixed;
      };
      outline?: {
        default: readonly Paint[] | typeof figma.mixed;
        hover?: readonly Paint[] | typeof figma.mixed;
      };
    };
  };
  paddings: Paddings;
  itemSpacing?: number;
  effects?: {
    default: readonly Effect[];
    hover?: readonly Effect[];
  };
  cornerRadius?: number | typeof figma.mixed;
  paddingsOnHover?: {
    default: Paddings;
    hover: Paddings;
  };
}

export interface ButtonTextProperties {
  fontName: typeof figma.mixed | FontName;
  defaultText: string;
  fontSize: number;
  lineHeight: typeof figma.mixed | LineHeight;
  fills: {
    light: {
      primary: {
        default: readonly Paint[] | typeof figma.mixed;
        hover?: readonly Paint[] | typeof figma.mixed;
      };
      outline?: {
        default: readonly Paint[] | typeof figma.mixed;
        hover?: readonly Paint[] | typeof figma.mixed;
      };
    };
    dark?: {
      primary: {
        default: readonly Paint[] | typeof figma.mixed;
        hover?: readonly Paint[] | typeof figma.mixed;
      };
      outline?: {
        default: readonly Paint[] | typeof figma.mixed;
        hover?: readonly Paint[] | typeof figma.mixed;
      };
    };
  };
  letterSpacing?: typeof figma.mixed | LetterSpacing;
  textCase?: TextCase | typeof figma.mixed;
}

export interface ArrowPropeties {
  fills: {
    light: {
      primary: {
        default: readonly Paint[] | typeof figma.mixed;
        hover?: readonly Paint[] | typeof figma.mixed;
      };
      outline?: {
        default: readonly Paint[] | typeof figma.mixed;
        hover?: readonly Paint[] | typeof figma.mixed;
      };
    };
    dark?: {
      primary: {
        default: readonly Paint[] | typeof figma.mixed;
        hover?: readonly Paint[] | typeof figma.mixed;
      };
      outline?: {
        default: readonly Paint[] | typeof figma.mixed;
        hover?: readonly Paint[] | typeof figma.mixed;
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
  (button: FrameNode, buttonProperties: ButtonProperties): FrameNode;
}

export interface SetButtonTextPropertires {
  (buttonText: TextNode, buttonTextProperties: ButtonTextProperties): TextNode;
}

export type MapPropertiesToButtonIds = {
  [key in Button]: {
    button: ButtonProperties;
    text: ButtonTextProperties;
    arrow?: ArrowPropeties;
  };
};

export interface SetButtonHoverProperties {
  (buttonHover: FrameNode, buttonProperties: ButtonProperties): FrameNode;
}

export interface Fills {
  [color: string]: {
    default: readonly Paint[] | typeof figma.mixed;
    hover?: readonly Paint[] | typeof figma.mixed;
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
