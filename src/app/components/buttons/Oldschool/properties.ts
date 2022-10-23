import { solidShadowWhite } from "../../../data/figma_properties/shadows/solidShadowWhite";
import { solidShadowBlack } from "../../../data/figma_properties/shadows/solidShadowBlack";
import { black } from "../../../data/figma_properties/colors/black";
import { uiDark } from "../../../data/figma_properties/colors/uiDark";
import { amber } from "../../../data/figma_properties/colors/amber";
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
        default: amber.default,
      },
      outline: {
        default: white.default,
      },
    },
    dark: {
      primary: {
        default: white.default,
      },
      outline: {
        default: uiDark.default,
      },
    },
  },
  paddings: [14, 40, 14, 40],
  itemSpacing: 5,
  cornerRadius: 4,
  strokes: {
    fills: {
      light: {
        default: black.default,
      },
      dark: {
        default: white.default,
      },
    },
    weight: 1,
    isForced: true,
  },
  paddingsOnHover: {
    default: [4, 4, 4, 4],
    hover: [0, 8, 8, 0],
  },
  effects: {
    light: {
      default: solidShadowBlack.default,
      hover: solidShadowBlack.hover,
    },
    dark: {
      default: solidShadowBlack.default,
      hover: solidShadowBlack.hover,
    },
    ifOutline: {
      dark: {
        default: solidShadowWhite.default,
        hover: solidShadowWhite.hover,
      },
    },
  },
};

export const buttonTextPropertiesOldschool: ButtonTextProperties = {
  fontName: { family: "Lato", style: "Regular" },
  defaultText: "Sign up",
  fontSize: 14,
  lineHeight: { value: 100, unit: "PERCENT" },
  fills: {
    light: {
      primary: {
        default: black.default,
      },
      outline: {
        default: black.default,
      },
    },
    dark: {
      primary: {
        default: uiDark.default,
      },
      outline: {
        default: white.default,
      },
    },
  },
};

export const arrowPropertiesOldschool: ArrowPropeties = {
  vectorPaths: [
    {
      windingRule: "NONZERO",
      data: "M 3.2400004863739014 7.199999809265137 L 5.940000534057617 3.5999999046325684 L 3.2400004863739014 0 L 4.1914286613464355 0 L 6.891429424285889 3.5999999046325684 L 4.1914286613464355 7.199999809265137 L 3.2400004863739014 7.199999809265137 Z M 0 7.199999809265137 L 2.700000286102295 3.5999999046325684 L 0 0 L 0.9514285922050476 0 L 3.651428699493408 3.5999999046325684 L 0.9514285922050476 7.199999809265137 L 0 7.199999809265137 Z",
    },
  ],
  fills: {
    light: {
      primary: {
        default: black.default,
      },
      outline: {
        default: black.default,
      },
    },
    dark: {
      primary: {
        default: uiDark.default,
      },
      outline: {
        default: white.default,
      },
    },
  },
  frameSize: {
    width: 9,
    height: 8,
  },
  vectorOffset: {
    initial: {
      x: 0,
      y: 1.5,
    },
    hover: {
      x: 0,
      y: 1.5,
    },
  },
};
