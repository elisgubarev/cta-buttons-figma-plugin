import { Button } from "./enums";

export interface OnClick {
  (event?: React.MouseEvent<HTMLElement>): void;
}

type Paddings = [number, number, number, number];

export interface ButtonProperties {
  name: string;
  fills: {
    default: readonly Paint[] | typeof figma.mixed;
    hover?: readonly Paint[] | typeof figma.mixed;
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
    default: readonly Paint[] | typeof figma.mixed;
    hover?: readonly Paint[] | typeof figma.mixed;
  };
  letterSpacing?: typeof figma.mixed | LetterSpacing;
  textCase?: TextCase | typeof figma.mixed;
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
  };
};

export interface SetButtonHoverProperties {
  (buttonHover: FrameNode, buttonProperties: ButtonProperties): FrameNode;
}
