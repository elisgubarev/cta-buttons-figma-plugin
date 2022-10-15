import { hotPink } from "../../../data/figma_properties/colors/hotPink";
import { smoke } from "../../../data/figma_properties/colors/smoke";
import { uiDark } from "../../../data/figma_properties/colors/uiDark";
import { white } from "../../../data/figma_properties/colors/white";
import {
  ArrowPropeties,
  ButtonProperties,
  ButtonTextProperties,
} from "../../../data/types";

export const buttonPropertiesEngaging: ButtonProperties = {
  name: "Engaging Button",
  fills: {
    light: {
      primary: {
        default: hotPink.default,
        hover: hotPink.hover2,
      },
      outline: {
        default: white.default,
      },
    },
    dark: {
      primary: {
        default: white.default,
        hover: white.hover2,
      },
      outline: {
        default: uiDark.default,
      },
    },
  },
  paddings: [14, 16, 14, 16],
  itemSpacing: 40,
  strokes: {
    fills: {
      light: {
        default: smoke.hover7,
        hover: hotPink.default,
      },
      dark: {
        default: white.hover5,
        hover: white.default,
      },
    },
    weight: 1,
  },
  cornerRadius: 4,
};

export const buttonTextPropertiesEngaging: ButtonTextProperties = {
  fontName: { family: "Lato", style: "Regular" },
  defaultText: "Sign up for free",
  fontSize: 14,
  lineHeight: { value: 100, unit: "PERCENT" },
  fills: {
    light: {
      primary: {
        default: white.default,
      },
      outline: {
        default: smoke.default,
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

export const arrowPropertiesEngaging: ArrowPropeties = {
  vectorPaths: [
    {
      windingRule: "NONZERO",
      data: "M 0.526835626394938 4.5268357116470614 L 6.411589613420763 4.5268357116470614 L 3.8406316963219136 7.097793542346595 C 3.6351658095643318 7.303259462352504 3.6351658095643318 7.640434373073889 3.8406316963219136 7.845900293079797 C 4.046097583079495 8.051366213085705 4.378003962392458 8.051366213085705 4.583469849150039 7.845900293079797 L 8.055317209911022 4.374053375366601 C 8.260783096668604 4.168587455360692 8.260783096668604 3.8366812735537468 8.055317209911022 3.631215353547838 L 4.588738325997094 0.15409944000443143 C 4.383272439239513 -0.051366480001477144 4.05136605992655 -0.051366480001477144 3.8459001731689684 0.15409944000443143 C 3.6404342864113866 0.35956536001034 3.6404342864113866 0.6914720599479005 3.8459001731689684 0.8969379799538091 L 6.411589613420763 3.473164539567782 L 0.526835626394938 3.473164539567782 C 0.23707602559735202 3.473164539567782 0 3.7102406035285886 0 4.000000251214844 C 0 4.2897598989010985 0.23707602559735202 4.5268357116470614 0.526835626394938 4.5268357116470614 Z",
    },
  ],
  fills: {
    light: {
      primary: {
        default: white.default,
      },
      outline: {
        default: smoke.default,
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
    width: 8,
    height: 8,
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
