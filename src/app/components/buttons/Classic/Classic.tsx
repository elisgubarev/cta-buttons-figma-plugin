import React from "react";
import { buttonTextPropertiesClassic } from "./properties";
import classic from "../../../styles/buttons/Classic.module.scss";

const Classic = (): JSX.Element => {
  return (
    <button className={classic.button}>
      <span className={classic.text}>
        {buttonTextPropertiesClassic.defaultText}
      </span>
    </button>
  );
};

export default Classic;
