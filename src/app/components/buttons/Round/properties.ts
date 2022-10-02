import { fills } from "../../../data/global_properties/fills";
import { shadows } from "../../../data/global_properties/shadows";
import { ButtonProperties, ButtonTextProperties } from "../../../data/types";

export const buttonPropertiesRound: ButtonProperties = {
  name: "Round Button",
  fills: {
    default: fills.calmBlue.default,
    hover: fills.calmBlue.hover,
  },
  paddings: [23, 32, 23, 32],
  itemSpacing: 12,
  effects: {
    default: shadows.small.default,
    hover: shadows.small.hover,
  },
  cornerRadius: 999,
  paddingsOnHover: {
    default: [3, 0, 3, 0],
    hover: [0, 0, 6, 0],
  },
};
export const buttonTextPropertiesRound: ButtonTextProperties = {
  fontName: { family: "Montserrat", style: "SemiBold" },
  defaultText: "Sign Up",
  fontSize: 14,
  lineHeight: { value: 100, unit: "PERCENT" },
  fills: {
    default: fills.white.default,
  },
};
