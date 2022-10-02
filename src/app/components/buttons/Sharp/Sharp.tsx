import React from "react";
import { buttonTextPropertiesSharp } from "./properties";
import "../../../styles/buttons/Sharp.scss";

const Sharp = (): JSX.Element => {
  return (
    <button className="button sharp">
      <span className="sharp__text">
        {buttonTextPropertiesSharp.defaultText}
      </span>
    </button>
  );
};

export default Sharp;
