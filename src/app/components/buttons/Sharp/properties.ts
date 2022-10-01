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
        opacity: 1,
        blendMode: "NORMAL",
        color: {
          r: 0.9333333373069763,
          g: 0.32156863808631897,
          b: 0.32549020648002625,
        },
      },
    ],
  },
};

export const buttonTextPropertiesSharp: ButtonTextProperties = {
  fontName: { family: "Montserrat", style: "Bold" },
  defaultText: "Try it for free",
  fontSize: 10,
  lineHeight: { value: 100, unit: "PERCENT" },
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
};
