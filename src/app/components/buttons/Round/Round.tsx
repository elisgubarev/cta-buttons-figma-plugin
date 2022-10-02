import React from "react";
import style from "../../../styles/buttons/Round.module.scss";

const Round = (): JSX.Element => {
  return (
    <button className={style.button}>
      <span className={style.text}>Sign Up</span>
    </button>
  );
};

export default Round;
