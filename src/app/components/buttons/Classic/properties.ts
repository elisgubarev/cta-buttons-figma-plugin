import { uiDark } from "../../../data/figma_properties/colors/uiDark";
import { unicornBlue } from "../../../data/figma_properties/colors/unicornBlue";
import { white } from "../../../data/figma_properties/colors/white";
import { smallShadow } from "../../../data/figma_properties/shadows/smallShadow";
import { smallShadowBlack } from "../../../data/figma_properties/shadows/smallShadowBlack";
import {
  ArrowPropeties,
  ButtonProperties,
  ButtonTextProperties,
} from "../../../data/types";

export const buttonPropertiesClassic: ButtonProperties = {
  name: "Classic Button",
  fills: {
    light: {
      primary: {
        default: unicornBlue.default,
        hover: unicornBlue.hover,
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
  paddings: [16, 32, 16, 32],
  itemSpacing: 10,
  effects: {
    light: {
      default: smallShadow.default,
      hover: smallShadow.hover,
    },
    dark: {
      default: smallShadowBlack.default,
      hover: smallShadowBlack.hover,
    },
  },
  cornerRadius: 4,
  paddingsOnHover: {
    default: [2, 0, 2, 0],
    hover: [0, 0, 4, 0],
  },
  strokes: {
    fills: {
      light: {
        default: unicornBlue.default,
        hover: unicornBlue.hover,
      },
      dark: {
        default: white.default,
        hover: white.hover3,
      },
    },
    weight: 2,
  },
};

export const buttonTextPropertiesClassic: ButtonTextProperties = {
  fontName: { family: "Lato", style: "Bold" },
  defaultText: "Get started",
  fontSize: 14,
  lineHeight: { value: 100, unit: "PERCENT" },
  fills: {
    light: {
      primary: {
        default: white.default,
      },
      outline: {
        default: unicornBlue.default,
        hover: unicornBlue.hover,
      },
    },
    dark: {
      primary: {
        default: uiDark.default,
      },
      outline: {
        default: white.default,
        hover: white.hover3,
      },
    },
  },
};

export const arrowPropertiesClassic: ArrowPropeties = {
  vectorPaths: [
    {
      windingRule: "NONZERO",
      data: "M 0.6585445788948896 5.658544639558827 L 8.01448757539377 5.658544639558827 L 4.800789955022263 8.872241927933246 C 4.543957578673812 9.129074327940632 4.543957578673812 9.55054296634236 4.800789955022263 9.807375366349747 C 5.057622331370714 10.064207766357134 5.472505334429678 10.064207766357134 5.729337710778129 9.807375366349747 L 10.06914721421843 5.467566719208252 C 10.325979590566881 5.210734319200866 10.325979590566881 4.795851591942184 10.06914721421843 4.539019191934798 L 5.7359233072959706 0.1926243000055393 C 5.479090930947519 -0.06420810000184643 5.064207927888556 -0.06420810000184643 4.807375551540105 0.1926243000055393 C 4.550543175191653 0.44945670001292504 4.550543175191653 0.8643400749348759 4.807375551540105 1.1211724749422616 L 8.01448757539377 4.341455674459728 L 0.6585445788948896 4.341455674459728 C 0.2963450526522372 4.341455674459728 0 4.637800754410737 0 5.000000314018555 C 0 5.362199873626373 0.2963450526522372 5.658544639558827 0.6585445788948896 5.658544639558827 Z",
    },
  ],
  fills: {
    light: {
      primary: {
        default: white.default,
      },
      outline: {
        default: unicornBlue.default,
        hover: unicornBlue.hover,
      },
    },
    dark: {
      primary: {
        default: uiDark.default,
      },
      outline: {
        default: white.default,
        hover: white.hover3,
      },
    },
  },
  frameSize: {
    width: 12,
    height: 12,
  },
  vectorOffset: {
    initial: {
      x: 0,
      y: 1,
    },
    hover: {
      x: 2,
      y: 1,
    },
  },
};
