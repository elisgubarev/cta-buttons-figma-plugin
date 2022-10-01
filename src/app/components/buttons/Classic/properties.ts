import { ButtonProperties, ButtonTextProperties } from "../../../types/types";

export const buttonPropertiesClassic: ButtonProperties = {
  name: "Classic Button",
  fills: {
    default: [
      {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: {
          r: 0.21568627655506134,
          g: 0.25882354378700256,
          b: 0.9803921580314636,
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
          r: 0.05882352963089943,
          g: 0.10980392247438431,
          b: 0.9529411792755127,
        },
      },
    ],
  },
  effects: {
    default: [
      {
        type: "DROP_SHADOW",
        color: {
          r: 0.14509804546833038,
          g: 0.1725490242242813,
          b: 0.3803921639919281,
          a: 0.15000000596046448,
        },
        offset: {
          x: 0,
          y: 5,
        },
        radius: 15,
        spread: 0,
        visible: true,
        blendMode: "NORMAL",
      },
      {
        type: "DROP_SHADOW",
        color: {
          r: 0.5333333611488342,
          g: 0.5647059082984924,
          b: 0.7607843279838562,
          a: 0.20000000298023224,
        },
        offset: {
          x: 0,
          y: 2,
        },
        radius: 4,
        spread: 0,
        visible: true,
        blendMode: "NORMAL",
      },
    ],
    hover: [
      {
        type: "DROP_SHADOW",
        color: {
          r: 0.14509804546833038,
          g: 0.1725490242242813,
          b: 0.3803921639919281,
          a: 0.20000000298023224,
        },
        offset: {
          x: 0,
          y: 7,
        },
        radius: 21,
        spread: 0,
        visible: true,
        blendMode: "NORMAL",
        showShadowBehindNode: false,
      },
      {
        type: "DROP_SHADOW",
        color: {
          r: 0.5333333611488342,
          g: 0.5647059082984924,
          b: 0.7607843279838562,
          a: 0.25,
        },
        offset: {
          x: 0,
          y: 3,
        },
        radius: 8,
        spread: 0,
        visible: true,
        blendMode: "NORMAL",
        showShadowBehindNode: false,
      },
    ],
  },
  cornerRadius: 4,
};

export const buttonTextPropertiesClassic: ButtonTextProperties = {
  fontName: { family: "Lato", style: "Bold" },
  defaultText: "Get started",
  fontSize: 14,
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
