import { solidShadowOffsetWhite } from "./../../../data/figma_properties/shadows/solidShadowOffsetWhite";
import { solidShadowOffsetBlack } from "./../../../data/figma_properties/shadows/solidShadowOffsetBlack";
import { uiDark } from "./../../../data/figma_properties/colors/uiDark";
import { black } from "../../../data/figma_properties/colors/black";
import { white } from "../../../data/figma_properties/colors/white";
import {
  ArrowPropeties,
  ButtonProperties,
  ButtonTextProperties,
} from "../../../data/types";

export const buttonPropertiesOldschool: ButtonProperties = {
  name: "Oldschool Button",
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
  paddings: [16, 18, 16, 18],
  itemSpacing: 10,
  strokes: {
    fills: {
      light: {
        default: black.default,
      },
      dark: {
        default: white.default,
      },
    },
    weight: 2,
    isForced: true,
  },
  paddingsOnHover: {
    default: [2, 2, 2, 2],
    hover: [0, 0, 4, 4],
  },
  effects: {
    light: {
      default: solidShadowOffsetBlack.default,
      hover: solidShadowOffsetBlack.hover,
    },
    dark: {
      default: solidShadowOffsetWhite.default,
      hover: solidShadowOffsetWhite.hover,
    },
  },
};

export const buttonTextPropertiesOldschool: ButtonTextProperties = {
  fontName: { family: "Source Code Pro", style: "SemiBold" },
  defaultText: "Sign up",
  fontSize: 14,
  lineHeight: { value: 100, unit: "PERCENT" },
  fills: {
    light: {
      primary: {
        default: black.default,
      },
    },
    dark: {
      primary: {
        default: white.default,
      },
    },
  },
};

export const arrowPropertiesOldschool: ArrowPropeties = {
  vectorPaths: [
    {
      windingRule: "NONZERO",
      data: "M 7 0 L 0 7 L 7 0 Z M 1.1666666666666667 0 L 7 0 L 7 5.833333333333334",
    },
  ],
  fills: {
    light: {
      primary: {
        default: [],
      },
      outline: {
        default: [],
      },
    },
    dark: {
      primary: {
        default: [],
      },
      outline: {
        default: [],
      },
    },
  },
  strokes: {
    light: {
      primary: {
        default: black.default,
      },
    },
    dark: {
      primary: {
        default: white.default,
      },
    },
    weight: 1.5,
  },
  frameSize: {
    width: 7,
    height: 7,
  },
  vectorOffset: {
    initial: {
      x: 0,
      y: 1,
    },
    hover: {
      x: 2,
      y: -1,
    },
  },
};
