import { smoke } from "../../../data/figma_properties/colors/smoke";
import { uiDark } from "../../../data/figma_properties/colors/uiDark";
import { white } from "../../../data/figma_properties/colors/white";
import { ButtonProperties, ButtonTextProperties } from "../../../data/types";

export const buttonPropertiesInformativeTag: ButtonProperties = {
  name: "Tag",
  fills: {
    light: {
      primary: {
        default: smoke.default,
      },
    },
    dark: {
      primary: {
        default: white.default,
      },
    },
  },
  paddings: [7, 10, 7, 10],
  cornerRadius: 999,
};

export const buttonTextPropertiesInformativeTag: ButtonTextProperties = {
  fontName: { family: "Lato", style: "Bold" },
  defaultText: "Free trial",
  fontSize: 10,
  lineHeight: { value: 100, unit: "PERCENT" },
  fills: {
    light: {
      primary: {
        default: white.default,
      },
    },
    dark: {
      primary: {
        default: uiDark.default,
      },
    },
  },
  textCase: "UPPER",
  letterSpacing: { value: 6, unit: "PERCENT" },
};
