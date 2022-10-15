import { fills } from "../../../data/figma_properties/fills";
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
        default: fills.black.default,
        hover: fills.black.hover,
      },
      outline: {
        default: fills.white.default,
        hover: fills.black.default,
      },
    },
    dark: {
      primary: {
        default: fills.white.default,
        hover: fills.white.hover2,
      },
      outline: {
        default: fills.uiButtonItemDark.default,
        hover: fills.white.default,
      },
    },
  },
  paddings: [20, 32, 20, 32],
  itemSpacing: 9,
  strokes: {
    fills: {
      light: {
        default: fills.black.default,
      },
      dark: {
        default: fills.white.default,
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
        default: fills.white.default,
      },
      outline: {
        default: fills.black.default,
        hover: fills.white.default,
      },
    },
    dark: {
      primary: {
        default: fills.uiButtonItemDark.default,
      },
      outline: {
        default: fills.white.default,
        hover: fills.uiButtonItemDark.default,
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
        default: fills.white.default,
      },
      outline: {
        default: fills.black.default,
        hover: fills.white.default,
      },
    },
    dark: {
      primary: {
        default: fills.uiButtonItemDark.default,
      },
      outline: {
        default: fills.white.default,
        hover: fills.uiButtonItemDark.default,
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
