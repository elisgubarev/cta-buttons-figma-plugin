import React, { useEffect, useState } from "react";
import style from "../../../styles/pluginUI/CustomizationMenu.module.scss";
import DropdownButton from "./DropdownButton";
import Dropdown from "./Dropdown";
import DrowdownOption from "./DrowdownOption";
import { useIsFirstRender } from "../../../data/hooks/useIsFirstRender";
import { PluginMessage } from "../../../data/types";
import { usePluginConfig } from "../../PluginConfigContext";
import { useOutsideClickRef } from "../../../data/hooks/useOutsideClickRef";

const CustomizationMenu = (): JSX.Element => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const isFirstRender = useIsFirstRender();
  const pluginConfig = usePluginConfig();

  useEffect(() => {
    if (!isFirstRender) {
      const pluginMessage: PluginMessage = {
        event: "saveConfig",
        pluginConfig,
      };
      parent.postMessage({ pluginMessage }, "*");
    }
  }, [pluginConfig]);

  const handleOutsideClick = () => setIsMenuOpened(false);
  const ref = useOutsideClickRef(handleOutsideClick);

  return (
    <div className={style.menu} ref={ref}>
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
