import { lightGrey } from "./../../../data/figma_properties/colors/lightGrey";
import { lightPurple } from "./../../../data/figma_properties/colors/lightPurple";
import { purple } from "./../../../data/figma_properties/colors/purple";
import { uiDark } from "../../../data/figma_properties/colors/uiDark";
import { white } from "../../../data/figma_properties/colors/white";
import {
  ArrowPropeties,
  ButtonProperties,
  ButtonTextProperties,
} from "../../../data/types";

export const buttonPropertiesCutCorner: ButtonProperties = {
  name: "Futuristic Button",
  fills: {
    light: {
      primary: {
        default: purple.default,
        hover: lightPurple.default,
      },
      outline: {
        default: [],
        hover: purple.default,
      },
    },
    dark: {
      primary: {
        default: white.default,
        hover: lightGrey.default,
      },
      outline: {
        default: [],
        hover: white.default,
      },
    },
  },
  paddings: [18, 36, 18, 36],
  itemSpacing: 12,
  strokes: {
    fills: {
      light: {
        default: purple.default,
      },
      dark: {
        default: white.default,
      },
    },
    weight: 2,
  },
};

export const buttonTextPropertiesCutCorner: ButtonTextProperties = {
  fontName: { family: "Orbitron", style: "Bold" },
  defaultText: "Explore Now",
  fontSize: 11,
  lineHeight: { value: 100, unit: "PERCENT" },
  fills: {
    light: {
      primary: {
        default: white.default,
      },
      outline: {
        default: purple.default,
        hover: white.default,
      },
    },
    dark: {
      primary: {
        default: uiDark.default,
      },
      outline: {
        default: white.default,
        hover: uiDark.default,
      },
    },
  },
  letterSpacing: {
    unit: "PERCENT",
    value: 10,
  },
};

export const arrowPropertiesCutCorner: ArrowPropeties = {
  vectorPaths: [
    {
      windingRule: "NONZERO",
      data: "M 6 0 L 0 6 L 6 0 Z M 1 0 L 6 0 L 6 5",
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
        default: white.default,
      },
      outline: {
        default: purple.default,
        hover: white.default,
      },
    },
    dark: {
      primary: {
        default: uiDark.default,
      },
      outline: {
        default: white.default,
        hover: uiDark.default,
      },
    },
    weight: 1.5,
  },
  frameSize: {
    width: 8,
    height: 8,
  },
  vectorOffset: {
    initial: {
      x: 1,
      y: 2,
    },
    hover: {
      x: 3,
      y: 0,
    },
  },
};
