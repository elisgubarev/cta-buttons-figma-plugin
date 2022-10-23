import { Shadow } from "../../types";

export const solidShadowOffsetWhite: Shadow<"default" | "hover"> = {
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
        x: -4,
        y: 4,
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
        x: -6,
        y: 6,
      },
      radius: 0,
      spread: 0,
      visible: true,
      blendMode: "NORMAL",
      showShadowBehindNode: false,
    },
  ],
};
