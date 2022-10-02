import React from "react";
import customizeIcon from "../../assets/customize.svg";
import style from "../../styles/pluginUI/CustomizationButton.module.scss";

interface Props {}

const CustomizationButton = (props: Props): JSX.Element => {
  const {} = props;

  return (
    <button className={style.button}>
      <img src={customizeIcon} />
    </button>
  );
};

export default CustomizationButton;
