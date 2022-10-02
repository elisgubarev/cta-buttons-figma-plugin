import { ButtonProperties, ButtonTextProperties } from "../../../data/types";

export const buttonPropertiesRound: ButtonProperties = {
  name: "Round Button",
  fills: {
    default: [
      {
        type: "SOLID",
        visible: true,
        opacity: 1,
        blendMode: "NORMAL",
        color: {
          r: 0.03529411926865578,
          g: 0.5176470875740051,
          b: 0.8901960849761963,
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
          r: 0,
          g: 0.4537268877029419,
          b: 0.8041666746139526,
        },
      },
    ],
  },
  paddings: [23, 32, 23, 32],
  itemSpacing: 12,
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
        showShadowBehindNode: false,
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
        showShadowBehindNode: false,
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
  cornerRadius: 999,
  paddingsOnHover: {
    default: [3, 0, 3, 0],
    hover: [0, 0, 6, 0],
  },
};
export const buttonTextPropertiesRound: ButtonTextProperties = {
  fontName: { family: "Montserrat", style: "SemiBold" },
  defaultText: "Sign Up",
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
