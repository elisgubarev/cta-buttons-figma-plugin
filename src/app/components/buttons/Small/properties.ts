import { fills } from "../../../data/global_properties/fills";
import { shadows } from "../../../data/global_properties/shadows";
import {
  ArrowPropeties,
  ButtonProperties,
  ButtonTextProperties,
} from "../../../data/types";

export const buttonPropertiesSmall: ButtonProperties = {
  name: "Small Button",
  fills: {
    light: {
      primary: {
        default: fills.smoke.default,
        hover: fills.smoke.hover2,
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
  paddings: [11, 18, 11, 18],
  itemSpacing: 8,
  cornerRadius: 999,
  strokes: {
    fills: {
      light: {
        default: fills.smoke.default,
        hover: fills.smoke.hover3,
      },
      dark: {
        default: fills.white.default,
        hover: fills.white.hover3,
      },
    },
    weight: 2,
  },
};

export const buttonTextPropertiesSmall: ButtonTextProperties = {
  fontName: { family: "Lato", style: "Bold" },
  defaultText: "Get it",
  fontSize: 14,
  lineHeight: { value: 100, unit: "PERCENT" },
  fills: {
    light: {
      primary: {
        default: fills.white.default,
      },
      outline: {
        default: fills.smoke.default,
        hover: fills.smoke.hover3,
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

export const arrowPropertiesSmall: ArrowPropeties = {
  vectorPaths: [
    {
      windingRule: "NONZERO",
      data: "M 0.23575477369975775 0.23677218873850467 C -0.07858492456658592 0.551111882227333 -0.07858492456658592 1.0588913298138918 0.23575477369975775 1.37323102330272 L 3.3630320028045 4.50050808477406 L 0.23575477369975775 7.627785242327997 C -0.07858492456658592 7.9421249358168255 -0.07858492456658592 8.449905128043513 0.23575477369975775 8.76424482153234 C 0.5500944719661014 9.078584515021168 1.057873927270184 9.078584515021168 1.3722136255365278 8.76424482153234 L 5.071750333047415 5.06470740158836 C 5.386090031313759 4.750367708099532 5.386090031313759 4.242588284533623 5.071750333047415 3.9282485910447944 L 1.3722136255365278 0.2287120118235401 C 1.0659339121424547 -0.07756769691551804 0.5500944719661014 -0.07756750475032362 0.23575477369975775 0.23677218873850467 Z",
    },
  ],
  fills: {
    light: {
      primary: {
        default: fills.white.default,
      },
      outline: {
        default: fills.smoke.default,
        hover: fills.smoke.hover3,
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
    width: 5,
    height: 9,
  },
  vectorOffset: {
    initial: {
      x: 0,
      y: 0.5,
    },
    hover: {
      x: 2,
      y: 0.5,
    },
  },
};
