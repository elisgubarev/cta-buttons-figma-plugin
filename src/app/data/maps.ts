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
};
