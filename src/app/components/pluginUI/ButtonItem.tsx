import React from "react";
import { OnClick } from "../../types/types";
import "../../styles/pluginUI/ButtonItem.scss";

interface Props {
  children: JSX.Element;
}

const ButtonItem = (props: Props): JSX.Element => {
  const { children } = props;
  const handleOnClick: OnClick = () => {
    parent.postMessage({ pluginMessage: "click" }, "*");
  };

  return (
    <div className="button-item" onClick={handleOnClick}>
      {children}
    </div>
  );
};

export default ButtonItem;
