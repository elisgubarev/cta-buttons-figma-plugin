import React from "react";
import round from "../../../styles/buttons/Round.module.scss";

const Round = (): JSX.Element => {
  return (
    <button className={round.button}>
      <span className={round.text}>Sign Up</span>
    </button>
  );
};

export default Round;
