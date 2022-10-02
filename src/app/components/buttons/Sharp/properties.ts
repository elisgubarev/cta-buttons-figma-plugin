import { ButtonProperties, ButtonTextProperties } from "../../../data/types";

export const buttonPropertiesSharp: ButtonProperties = {
  name: "Sharp Button",
  fills: {
    default: [
      {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: {
          r: 0,
          g: 0,
          b: 0,
        },
      },
    ],
    hover: [
      {
        type: "SOLID",
        visible: true,
        opacity: 0.699999988079071,
        blendMode: "NORMAL",
        color: {
          r: 0,
          g: 0,
          b: 0,
        },
      },
    ],
  },
  paddings: [20, 32, 20, 32],
  itemSpacing: 9,
};

export const buttonTextPropertiesSharp: ButtonTextProperties = {
  fontName: { family: "Montserrat", style: "Bold" },
  defaultText: "Try it for free",
  fontSize: 10,
  lineHeight: { value: 110, unit: "PERCENT" },
  fills: {
    default: [
      {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: {
          r: 1,
          g: 1,
          b: 1,
        },
      },
    ],
  },
  letterSpacing: {
    unit: "PERCENT",
    value: 16,
  },
  textCase: "UPPER",
};
