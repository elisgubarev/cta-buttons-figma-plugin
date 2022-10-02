import React from "react";
import { buttonTextPropertiesClassic } from "./properties";
import style from "../../../styles/buttons/Classic.module.scss";

const Classic = (): JSX.Element => {
  return (
    <button className={style.button}>
      <span className={style.text}>
        {buttonTextPropertiesClassic.defaultText}
      </span>
    </button>
  );
};

export default Classic;
