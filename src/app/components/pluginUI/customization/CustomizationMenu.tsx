import React, { useState } from "react";
import style from "../../../styles/pluginUI/CustomizationMenu.module.scss";
import DropdownButton from "./DropdownButton";
import Dropdown from "./Dropdown";
import DrowdownOption from "./DrowdownOption";

const CustomizationMenu = (): JSX.Element => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <div className={style.menu}>
      <Dropdown isMenuOpened={isMenuOpened}>
        <DrowdownOption
          configProperty="hover"
          setIsMenuOpened={setIsMenuOpened}
        >
          Hover state
        </DrowdownOption>
        <DrowdownOption
          configProperty="arrow"
          setIsMenuOpened={setIsMenuOpened}
        >
          Arrow
        </DrowdownOption>
        <DrowdownOption
          configProperty="outline"
          setIsMenuOpened={setIsMenuOpened}
        >
          Outline
        </DrowdownOption>
        <DrowdownOption configProperty="dark" setIsMenuOpened={setIsMenuOpened}>
          Dark theme
        </DrowdownOption>
      </Dropdown>
      <DropdownButton
        isMenuOpened={isMenuOpened}
        setIsMenuOpened={setIsMenuOpened}
      />
    </div>
  );
};

export default CustomizationMenu;