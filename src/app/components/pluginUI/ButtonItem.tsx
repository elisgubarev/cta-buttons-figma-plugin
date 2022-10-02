import React from "react";
import { Button } from "../../data/enums";
import { OnClick } from "../../data/types";
import "../../styles/pluginUI/ButtonItem.scss";

interface Props {
  children: JSX.Element;
  buttonId: Button;
}

const ButtonItem = (props: Props): JSX.Element => {
  const { children, buttonId } = props;
  const handleOnClick: OnClick = () => {
    parent.postMessage({ pluginMessage: { event: "click", buttonId } }, "*");
  };

  return (
    <div className="button-item" onClick={handleOnClick}>
      {children}
    </div>
  );
};

export default ButtonItem;
