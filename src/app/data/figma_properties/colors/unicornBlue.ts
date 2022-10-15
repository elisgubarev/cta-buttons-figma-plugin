import { Color } from "./../../types";

// #3742FA
export const unicornBlue: Color<"default" | "hover"> = {
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
};
