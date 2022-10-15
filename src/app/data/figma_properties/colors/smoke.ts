import { Color } from "./../../types";

// #2B2E4A
export const smoke: Color<"default" | "hover2" | "hover3" | "hover7"> = {
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
  hover2: [
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
  hover3: [
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
  hover7: [
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
