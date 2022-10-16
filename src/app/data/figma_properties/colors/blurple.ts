import { Color } from "./../../types";

// #686DE0
export const blurple: Color<"default" | "hover03" | "hover02" | "hover01"> = {
  default: [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        r: 0.40784314274787903,
        g: 0.4274509847164154,
        b: 0.8784313797950745,
      },
    },
  ],
  hover03: [
    {
      type: "SOLID",
      visible: true,
      opacity: 0.3,
      blendMode: "NORMAL",
      color: {
        r: 0.40784314274787903,
        g: 0.4274509847164154,
        b: 0.8784313797950745,
      },
    },
  ],
  hover02: [
    {
      type: "SOLID",
      visible: true,
      opacity: 0.2,
      blendMode: "NORMAL",
      color: {
        r: 0.40784314274787903,
        g: 0.4274509847164154,
        b: 0.8784313797950745,
      },
    },
  ],
  hover01: [
    {
      type: "SOLID",
      visible: true,
      opacity: 0.1,
      blendMode: "NORMAL",
      color: {
        r: 0.40784314274787903,
        g: 0.4274509847164154,
        b: 0.8784313797950745,
      },
    },
  ],
};
