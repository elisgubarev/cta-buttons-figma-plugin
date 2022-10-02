import { fills } from "../../../data/global_properties/fills";
import { ButtonProperties, ButtonTextProperties } from "../../../data/types";

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
