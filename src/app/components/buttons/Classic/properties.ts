import { fills } from "../../../data/global_properties/fills";
import { shadows } from "../../../data/global_properties/shadows";
import { ButtonProperties, ButtonTextProperties } from "../../../data/types";

export const buttonPropertiesClassic: ButtonProperties = {
  name: "Classic Button",
  fills: {
    default: fills.unicornBlue.default,
    hover: fills.unicornBlue.hover,
  },
  paddings: [16, 32, 16, 32],
  itemSpacing: 10,
  effects: {
    default: shadows.small.default,
    hover: shadows.small.hover,
  },
  cornerRadius: 4,
  paddingsOnHover: {
    default: [2, 0, 2, 0],
    hover: [0, 0, 4, 0],
  },
};

export const buttonTextPropertiesClassic: ButtonTextProperties = {
  fontName: { family: "Lato", style: "Bold" },
  defaultText: "Get started",
  fontSize: 14,
  lineHeight: { value: 100, unit: "PERCENT" },
  fills: {
    default: fills.white.default,
  },
};
