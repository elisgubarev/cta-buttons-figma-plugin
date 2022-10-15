import { black } from "../../../data/figma_properties/colors/black";
import { uiDark } from "../../../data/figma_properties/colors/uiDark";
import { white } from "../../../data/figma_properties/colors/white";
import {
  ArrowPropeties,
  ButtonProperties,
  ButtonTextProperties,
} from "../../../data/types";

export const buttonPropertiesSharp: ButtonProperties = {
  name: "Sharp Button",
  fills: {
    light: {
      primary: {
        default: black.default,
        hover: black.hover07,
      },
      outline: {
        default: white.default,
        hover: black.default,
      },
    },
    dark: {
      primary: {
        default: white.default,
        hover: white.hover07,
      },
      outline: {
        default: uiDark.default,
        hover: white.default,
      },
    },
  },
  paddings: [20, 32, 20, 32],
  itemSpacing: 9,
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
  },
};

export const buttonTextPropertiesSharp: ButtonTextProperties = {
  fontName: { family: "Montserrat", style: "Bold" },
  defaultText: "Try it for free",
  fontSize: 10,
  lineHeight: { value: 110, unit: "PERCENT" },
  fills: {
    light: {
      primary: {
        default: white.default,
      },
      outline: {
        default: black.default,
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
  fills: {
    light: {
      primary: {
        default: white.default,
      },
      outline: {
        default: black.default,
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
