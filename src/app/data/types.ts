export interface OnClick {
  (event?: React.MouseEvent<HTMLElement>): void;
}

export interface ButtonProperties {
  name: string;
  fills: {
    default: readonly Paint[] | typeof figma.mixed;
    hover?: readonly Paint[] | typeof figma.mixed;
  };
  effects?: {
    default: readonly Effect[];
    hover?: readonly Effect[];
  };
  cornerRadius?: number | typeof figma.mixed;
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
}

export type Button = ComponentNode | ComponentSetNode;

export interface InsertButtonToCanvas {
  (button: Button): string;
}

export type AutoLayoutNode =
  | FrameNode
  | ComponentNode
  | ComponentSetNode
  | InstanceNode;

export interface SetAutoLayout {
  (
    node: AutoLayoutNode,
    padding?: [number, number, number, number],
    itemSpacing?: number
  ): AutoLayoutNode;
}

export interface SetButtonProperties {
  (button: FrameNode, buttonProperties: ButtonProperties): FrameNode;
}

export interface SetButtonTextPropertires {
  (buttonText: TextNode, buttonTextProperties: ButtonTextProperties): TextNode;
}
