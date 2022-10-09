import { fills } from "../../../data/global_properties/fills";
import {
  ArrowPropeties,
  ButtonProperties,
  ButtonTextProperties,
} from "../../../data/types";

export const buttonPropertiesSharp: ButtonProperties = {
  name: "Sharp Button",
  fills: {
    default: fills.black.default,
    hover: fills.black.hover,
  },
  paddings: [20, 32, 20, 32],
  itemSpacing: 9,
};

export const buttonTextPropertiesSharp: ButtonTextProperties = {
  fontName: { family: "Montserrat", style: "Bold" },
  defaultText: "Try it for free",
  fontSize: 10,
  lineHeight: { value: 110, unit: "PERCENT" },
  fills: {
    default: fills.white.default,
  },
  letterSpacing: {
    unit: "PERCENT",
    value: 16,
  },
  textCase: "UPPER",
};

export const arrowPropertiesSharp: ArrowPropeties = {
  vectorPaths: [
    {
      windingRule: "NONZERO",
      data: "M 0.9928378663781761 6.999999999999999 L 5 3.499999707564398 L 0.9928378663781761 0 L 0 0.8671803451191286 L 3.014324267243648 3.499999707564398 L 0 6.132818485138464 L 0.9928378663781761 6.999999999999999 Z",
    },
  ],
  frameSize: {
    width: 5,
    height: 7,
  },
  vectorOffset: {
    initial: {
      x: 0,
      y: 0,
    },
    hover: {
      x: 2,
      y: 0,
    },
  },
};
