import { Shadow } from "../../types";

export const eyeCathingEffectsMix: Shadow<"light" | "dark"> = {
  light: [
    {
      type: "INNER_SHADOW",
      color: {
        r: 0.20243053138256073,
        g: 0.1361110806465149,
        b: 0.6666666865348816,
        a: 0.25,
      },
      offset: {
        x: 0,
        y: -1,
      },
      radius: 1,
      spread: 1,
      visible: true,
      blendMode: "NORMAL",
    },
    {
      type: "INNER_SHADOW",
      color: {
        r: 1,
        g: 1,
        b: 1,
        a: 0.25,
      },
      offset: {
        x: 0,
        y: 1,
      },
      radius: 1,
      spread: 1,
      visible: true,
      blendMode: "NORMAL",
    },
    {
      type: "INNER_SHADOW",
      color: {
        r: 0.2823529541492462,
        g: 0.20392157137393951,
        b: 0.8313725590705872,
        a: 1,
      },
      offset: {
        x: 0,
        y: 0,
      },
      radius: 0,
      spread: 1,
      visible: true,
      blendMode: "NORMAL",
    },
    {
      type: "DROP_SHADOW",
      color: {
        r: 0.07690538465976715,
        g: 0.053368061780929565,
        b: 0.24166665971279144,
        a: 0.25,
      },
      offset: {
        x: 0,
        y: 1,
      },
      radius: 2,
      spread: 0,
      visible: true,
      blendMode: "NORMAL",
      showShadowBehindNode: false,
    },
  ],
  dark: [
    {
      type: "DROP_SHADOW",
      color: {
        r: 0,
        g: 0,
        b: 0,
        a: 0.3499999940395355,
      },
      offset: {
        x: 0,
        y: 1,
      },
      radius: 2,
      spread: 0,
      visible: true,
      blendMode: "NORMAL",
      showShadowBehindNode: false,
    },
  ],
};
