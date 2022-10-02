import {
  buttonPropertiesClassic,
  buttonTextPropertiesClassic,
} from "../components/buttons/Classic/properties";
import {
  buttonPropertiesSharp,
  buttonTextPropertiesSharp,
} from "../components/buttons/Sharp/properties";
import { Button } from "./enums";
import { MapPropertiesToButtonIds } from "./types";

export const mapPropertiesToButtonIds: MapPropertiesToButtonIds = {
  [Button.Classic]: {
    button: buttonPropertiesClassic,
    text: buttonTextPropertiesClassic,
  },
  [Button.Sharp]: {
    button: buttonPropertiesSharp,
    text: buttonTextPropertiesSharp,
  },
};
