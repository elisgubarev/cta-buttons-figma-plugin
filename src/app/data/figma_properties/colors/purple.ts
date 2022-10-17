import { Color } from "./../../types";

export const purple: Color<"default" | "hover08"> = {
  default: [
    {
      type: "SOLID",
      visible: true,
      opacity: 1,
      blendMode: "NORMAL",
      color: {
        r: 0.2823529541492462,
        g: 0.20392157137393951,
        b: 0.8313725590705872,
      },
    },
  ],
  hover08: [
    {
      type: "SOLID",
      visible: true,
      opacity: 0.8,
      blendMode: "NORMAL",
      color: {
        r: 0.2823529541492462,
        g: 0.20392157137393951,
        b: 0.8313725590705872,
      },
    },
  ],
};
