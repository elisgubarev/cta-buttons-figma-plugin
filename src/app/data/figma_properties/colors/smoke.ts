import { Color } from "./../../types";

// #2B2E4A
export const smoke: Color<"default" | "hover07" | "hover06" | "hover02"> = {
  default: [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        r: 0.16862745583057404,
        g: 0.18039216101169586,
        b: 0.29019609093666077,
      },
    },
  ],
  hover07: [
    {
      type: "SOLID",
      visible: true,
      opacity: 0.7,
      blendMode: "NORMAL",
      color: {
        r: 0.16862745583057404,
        g: 0.18039216101169586,
        b: 0.29019609093666077,
      },
    },
  ],
  hover06: [
    {
      type: "SOLID",
      visible: true,
      opacity: 0.6,
      blendMode: "NORMAL",
      color: {
        r: 0.16862745583057404,
        g: 0.18039216101169586,
        b: 0.29019609093666077,
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
        r: 0.16862745583057404,
        g: 0.18039216101169586,
        b: 0.29019609093666077,
      },
    },
  ],
};
