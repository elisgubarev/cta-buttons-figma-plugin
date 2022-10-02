import React from "react";
import { buttonTextPropertiesSharp } from "./properties";
import style from "../../../styles/buttons/Sharp.module.scss";

const Sharp = (): JSX.Element => {
  return (
    <button className={style.button}>
      <span className={style.text}>
        {buttonTextPropertiesSharp.defaultText}
      </span>
    </button>
  );
};

export default Sharp;
