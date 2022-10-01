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
