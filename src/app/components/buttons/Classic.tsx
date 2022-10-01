import React from "react";
import "../../styles/buttons/Classic.scss";

interface Props {}

const Classic = (props: Props): JSX.Element => {
  const {} = props;
  return (
    <button className="button classic">
      <span className="classic__text">Get started</span>
    </button>
  );
};

export default Classic;
