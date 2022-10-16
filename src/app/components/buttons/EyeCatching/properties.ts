import { blurple } from "./../../../data/figma_properties/colors/blurple";
import { uiDark } from "../../../data/figma_properties/colors/uiDark";
import { white } from "../../../data/figma_properties/colors/white";
import {
  ArrowPropeties,
  ButtonProperties,
  ButtonTextProperties,
} from "../../../data/types";
import { eyeCathingEffectsMix } from "../../../data/figma_properties/shadows/eyeCatchingEffectsMix";

export const buttonPropertiesEyeCatching: ButtonProperties = {
  name: "Classic Button",
  fills: {
    light: {
      primary: {
        default: blurple.default,
      },
      outline: {
        default: blurple.hover01,
        hover: blurple.hover02,
      },
    },
    dark: {
      primary: {
        default: white.default,
      },
      outline: {
        default: white.hover01,
        hover: white.hover02,
      },
    },
  },
  paddings: [18, 24, 18, 24],
  itemSpacing: 10,
  effects: {
    light: {
      default: eyeCathingEffectsMix.light,
    },
    dark: {
      default: eyeCathingEffectsMix.dark,
    },
    ifOutline: {
      light: {
        default: [],
      },
      dark: {
        default: [],
      },
    },
  },
  cornerRadius: 10,
  strokes: {
    fills: {
      light: {
        default: blurple.hover03,
        hover: blurple.default,
      },
      dark: {
        default: white.hover03,
        hover: white.default,
      },
    },
    weight: 1,
  },
  opacity: {
    light: {
      primary: {
        default: 1,
        hover: 0.8,
      },
    },
    dark: {
      primary: {
        default: 1,
        hover: 0.8,
      },
    },
  },
};

export const buttonTextPropertiesEyeCatching: ButtonTextProperties = {
  fontName: { family: "Lato", style: "Bold" },
  defaultText: "Start your free trial",
  fontSize: 14,
  lineHeight: { value: 100, unit: "PERCENT" },
  fills: {
    light: {
      primary: {
        default: white.default,
      },
      outline: {
        default: blurple.default,
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

export const arrowPropertiesEyeCatching: ArrowPropeties = {
  vectorPaths: [
    {
      windingRule: "NONZERO",
      data: "M 0.5926901026449138 5.092690175602944 L 7.2130385944072675 5.092690175602944 L 4.320710825672089 7.98501773513992 C 4.089561694119072 8.216166895146566 4.089561694119072 8.595488669708125 4.320710825672089 8.826637829714771 C 4.551859957225106 9.057786989721418 4.925254648411068 9.057786989721418 5.1564037799640845 8.826637829714771 L 9.062232212064728 4.920810047287426 C 9.293381343617744 4.689660887280779 9.293381343617744 4.316266432747965 9.062232212064728 4.085117272741318 L 5.1623308166465325 0.17336187000498537 C 4.931181685093516 -0.05778729000166177 4.557786993907554 -0.05778729000166177 4.326637862354537 0.17336187000498537 C 4.09548873080152 0.4045110300116325 4.09548873080152 0.7779060674413882 4.326637862354537 1.0090552274480353 L 7.2130385944072675 3.9073101070137555 L 0.5926901026449138 3.9073101070137555 C 0.26671053912479464 3.9073101070137555 0 4.174020678969662 0 4.500000282616699 C 0 4.8259798862637355 0.26671053912479464 5.092690175602944 0.5926901026449138 5.092690175602944 Z",
    },
  ],
  fills: {
    light: {
      primary: {
        default: white.default,
      },
      outline: {
        default: blurple.default,
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
    width: 10,
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
