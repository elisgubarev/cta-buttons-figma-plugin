import { fills } from "../../../data/global_properties/fills";
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
        default: fills.hotPink.default,
        hover: fills.hotPink.hover2,
      },
      outline: {
        default: fills.white.default,
      },
    },
    dark: {
      primary: {
        default: fills.white.default,
        hover: fills.white.hover2,
      },
      outline: {
        default: fills.uiButtonItemDark.default,
      },
    },
  },
  paddings: [14, 16, 14, 16],
  itemSpacing: 40,
  strokes: {
    fills: {
      light: {
        default: fills.smoke.hover7,
        hover: fills.hotPink.default,
      },
      dark: {
        default: fills.white.hover5,
        hover: fills.white.default,
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
        default: fills.white.default,
      },
      outline: {
        default: fills.smoke.default,
      },
    },
    dark: {
      primary: {
        default: fills.uiButtonItemDark.default,
      },
      outline: {
        default: fills.white.default,
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
        default: fills.white.default,
      },
      outline: {
        default: fills.smoke.default,
      },
    },
    dark: {
      primary: {
        default: fills.uiButtonItemDark.default,
      },
      outline: {
        default: fills.white.default,
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
