import React from "react";
import { Button } from "../../data/enums";
import { OnClick } from "../../data/types";
import buttonItem from "../../styles/pluginUI/ButtonItem.module.scss";

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
    <div className={buttonItem.container} onClick={handleOnClick}>
      {children}
    </div>
  );
};

export default ButtonItem;
