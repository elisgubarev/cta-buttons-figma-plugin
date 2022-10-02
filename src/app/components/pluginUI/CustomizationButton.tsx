import React from "react";
import customizeIcon from "../../assets/customize.svg";
import style from "../../styles/pluginUI/CustomizationButton.module.scss";

const CustomizationButton = (): JSX.Element => {
  return (
    <button className={style.button}>
      <img src={customizeIcon} />
    </button>
  );
};

export default CustomizationButton;
