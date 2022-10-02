import React from "react";
import { buttonTextPropertiesSharp } from "./properties";
import sharp from "../../../styles/buttons/Sharp.module.scss";

const Sharp = (): JSX.Element => {
  return (
    <button className={sharp.button}>
      <span className={sharp.text}>
        {buttonTextPropertiesSharp.defaultText}
      </span>
    </button>
  );
};

export default Sharp;
