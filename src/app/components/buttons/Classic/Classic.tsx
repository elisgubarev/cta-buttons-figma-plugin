import React from "react";
import { buttonTextPropertiesClassic } from "./properties";
import "../../../styles/buttons/Classic.scss";

const Classic = (): JSX.Element => {
  return (
    <button className="button classic">
      <span className="classic__text">
        {buttonTextPropertiesClassic.defaultText}
      </span>
    </button>
  );
};

export default Classic;
