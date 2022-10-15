import {
  buttonPropertiesEngaging,
  buttonTextPropertiesEngaging,
  arrowPropertiesEngaging,
} from "./../components/buttons/Engaging/properties";
import { arrowPropertiesRound } from "./../components/buttons/Round/properties";
import {
  arrowPropertiesClassic,
  buttonPropertiesClassic,
  buttonTextPropertiesClassic,
} from "../components/buttons/Classic/properties";
import {
  buttonPropertiesRound,
  buttonTextPropertiesRound,
} from "../components/buttons/Round/properties";
import {
  arrowPropertiesSharp,
  buttonPropertiesSharp,
  buttonTextPropertiesSharp,
} from "../components/buttons/Sharp/properties";
import { Button } from "./enums";
import { MapPropertiesToButtonIds } from "./types";
import {
  buttonPropertiesSmall,
  buttonTextPropertiesSmall,
  arrowPropertiesSmall,
} from "../components/buttons/Small/properties";

export const mapPropertiesToButtonIds: MapPropertiesToButtonIds = {
  [Button.Classic]: {
    button: buttonPropertiesClassic,
    text: buttonTextPropertiesClassic,
    arrow: arrowPropertiesClassic,
  },
  [Button.Sharp]: {
    button: buttonPropertiesSharp,
    text: buttonTextPropertiesSharp,
    arrow: arrowPropertiesSharp,
  },
  [Button.Round]: {
    button: buttonPropertiesRound,
    text: buttonTextPropertiesRound,
    arrow: arrowPropertiesRound,
  },
  [Button.Small]: {
    button: buttonPropertiesSmall,
    text: buttonTextPropertiesSmall,
    arrow: arrowPropertiesSmall,
  },
  [Button.Engaging]: {
    button: buttonPropertiesEngaging,
    text: buttonTextPropertiesEngaging,
    arrow: arrowPropertiesEngaging,
  },
};
