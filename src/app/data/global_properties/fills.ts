import { Fills } from "../types";

export const fills: Fills = {
  white: {
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

  unicornBlue: {
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

  black: {
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

  calmBlue: {
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
};
