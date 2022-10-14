import { fills } from "../../../data/global_properties/fills";
import { shadows } from "../../../data/global_properties/shadows";
import {
  ArrowPropeties,
  ButtonProperties,
  ButtonTextProperties,
} from "../../../data/types";

export const buttonPropertiesRound: ButtonProperties = {
  name: "Round Button",
  fills: {
    light: {
      primary: {
        default: fills.calmBlue.default,
        hover: fills.calmBlue.hover,
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
  paddings: [23, 32, 23, 32],
  itemSpacing: 12,
  effects: {
    light: {
      default: shadows.small.default,
      hover: shadows.small.hover,
    },
    dark: {
      default: shadows.smallBlack.default,
      hover: shadows.smallBlack.hover,
    },
  },
  cornerRadius: 999,
  paddingsOnHover: {
    default: [3, 0, 3, 0],
    hover: [0, 0, 6, 0],
  },
  strokes: {
    weight: 2,
    fills: {
      light: {
        default: fills.calmBlue.default,
        hover: fills.calmBlue.hover,
      },
      dark: {
        default: fills.white.default,
        hover: fills.white.hover3,
      },
    },
  },
};

export const buttonTextPropertiesRound: ButtonTextProperties = {
  fontName: { family: "Montserrat", style: "SemiBold" },
  defaultText: "Sign Up",
  fontSize: 14,
  lineHeight: { value: 100, unit: "PERCENT" },
  fills: {
    light: {
      primary: {
        default: fills.white.default,
      },
      outline: {
        default: fills.calmBlue.default,
        hover: fills.calmBlue.hover,
      },
    },
    dark: {
      primary: {
        default: fills.uiButtonItemDark.default,
      },
      outline: {
        default: fills.white.default,
        hover: fills.white.hover3,
      },
    },
  },
};

export const arrowPropertiesRound: ArrowPropeties = {
  vectorPaths: [
    {
      windingRule: "NONZERO",
      data: "M 0.7243990551448655 6.224399103514709 L 8.815936556380274 6.224399103514709 L 5.280869084372438 9.759466120726568 C 4.998353463228552 10.041981760734693 4.998353463228552 10.505597262976595 5.280869084372438 10.78811290298472 C 5.563384705516324 11.070628542992845 6.019756020448289 11.070628542992845 6.302271641592175 10.78811290298472 L 11.076062216372137 6.014323391129076 C 11.358577837516023 5.731807751120952 11.358577837516023 5.275436751136401 11.076062216372137 4.992921111128277 L 6.3095157979454095 0.2118867300060932 C 6.027000176801524 -0.07062891000203109 5.570628861869558 -0.07062891000203109 5.288113240725672 0.2118867300060932 C 5.005597619581787 0.4944023700142175 5.005597619581787 0.950774082428363 5.288113240725672 1.2332897224364874 L 8.815936556380274 4.775601241905701 L 0.7243990551448655 4.775601241905701 C 0.32597956617967977 4.775601241905701 0 5.10158082985181 0 5.50000034542041 C 0 5.8984198609890095 0.32597956617967977 6.224399103514709 0.7243990551448655 6.224399103514709 Z",
    },
  ],
  fills: {
    light: {
      primary: {
        default: fills.white.default,
      },
      outline: {
        default: fills.calmBlue.default,
        hover: fills.calmBlue.hover,
      },
    },
    dark: {
      primary: {
        default: fills.uiButtonItemDark.default,
      },
      outline: {
        default: fills.white.default,
        hover: fills.white.hover3,
      },
    },
  },
  frameSize: {
    width: 12,
    height: 11,
  },
  vectorOffset: {
    initial: {
      x: 0,
      y: 0,
    },
    hover: {
      x: 3,
      y: 0,
    },
  },
};
