import { Shadow } from "../../types";

export const smallShadow: Shadow = {
  default: [
    {
      type: "DROP_SHADOW",
      color: {
        r: 0.14509804546833038,
        g: 0.1725490242242813,
        b: 0.3803921639919281,
        a: 0.15000000596046448,
      },
      offset: {
        x: 0,
        y: 5,
      },
      radius: 15,
      spread: 0,
      visible: true,
      blendMode: "NORMAL",
    },
    {
      type: "DROP_SHADOW",
      color: {
        r: 0.5333333611488342,
        g: 0.5647059082984924,
        b: 0.7607843279838562,
        a: 0.20000000298023224,
      },
      offset: {
        x: 0,
        y: 2,
      },
      radius: 4,
      spread: 0,
      visible: true,
      blendMode: "NORMAL",
    },
  ],
  hover: [
    {
      type: "DROP_SHADOW",
      color: {
        r: 0.14509804546833038,
        g: 0.1725490242242813,
        b: 0.3803921639919281,
        a: 0.20000000298023224,
      },
      offset: {
        x: 0,
        y: 7,
      },
      radius: 21,
      spread: 0,
      visible: true,
      blendMode: "NORMAL",
      showShadowBehindNode: false,
    },
    {
      type: "DROP_SHADOW",
      color: {
        r: 0.5333333611488342,
        g: 0.5647059082984924,
        b: 0.7607843279838562,
        a: 0.25,
      },
      offset: {
        x: 0,
        y: 3,
      },
      radius: 8,
      spread: 0,
      visible: true,
      blendMode: "NORMAL",
      showShadowBehindNode: false,
    },
  ],
};
