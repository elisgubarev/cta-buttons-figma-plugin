import { Shadow } from "./../../types";

export const solidShadowBlack: Shadow<"default" | "hover"> = {
  default: [
    {
      type: "DROP_SHADOW",
      color: {
        r: 0,
        g: 0,
        b: 0,
        a: 1,
      },
      offset: {
        x: 0,
        y: 0,
      },
      radius: 0,
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
        a: 1,
      },
      offset: {
        x: 4,
        y: 4,
      },
      radius: 0,
      spread: 0,
      visible: true,
      blendMode: "NORMAL",
      showShadowBehindNode: false,
    },
  ],
};
