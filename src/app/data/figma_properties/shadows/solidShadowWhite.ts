import { Shadow } from "./../../types";

export const solidShadowWhite: Shadow<"default" | "hover"> = {
  default: [
    {
      type: "DROP_SHADOW",
      color: {
        r: 1,
        g: 1,
        b: 1,
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
        r: 1,
        g: 1,
        b: 1,
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
