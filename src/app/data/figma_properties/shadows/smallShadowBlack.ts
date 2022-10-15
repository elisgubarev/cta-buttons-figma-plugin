import { Shadow } from "./../../types";

export const smallShadowBlack: Shadow = {
  default: [
    {
      type: "DROP_SHADOW",
      color: {
        r: 0,
        g: 0,
        b: 0,
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
        r: 0,
        g: 0,
        b: 0,
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
        r: 0,
        g: 0,
        b: 0,
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
        r: 0,
        g: 0,
        b: 0,
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
};
