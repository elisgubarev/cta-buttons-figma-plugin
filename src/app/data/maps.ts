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
import {
  arrowPropertiesCheerful,
  buttonPropertiesCheerful,
  buttonTextPropertiesCheerful,
} from "../components/buttons/Cheerful/properties";
import {
  buttonPropertiesEyeCatching,
  buttonTextPropertiesEyeCatching,
  arrowPropertiesEyeCatching,
} from "../components/buttons/EyeCatching/properties";
import {
  buttonPropertiesCutCorner,
  buttonTextPropertiesCutCorner,
  arrowPropertiesCutCorner,
} from "../components/buttons/Futuristic/properties";

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
  [Button.Cheerful]: {
    button: buttonPropertiesCheerful,
    text: buttonTextPropertiesCheerful,
    arrow: arrowPropertiesCheerful,
  },
  [Button.EyeCatching]: {
    button: buttonPropertiesEyeCatching,
    text: buttonTextPropertiesEyeCatching,
    arrow: arrowPropertiesEyeCatching,
  },
  [Button.Futuristic]: {
    button: buttonPropertiesCutCorner,
    text: buttonTextPropertiesCutCorner,
    arrow: arrowPropertiesCutCorner,
  },
};
