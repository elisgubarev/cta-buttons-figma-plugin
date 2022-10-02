import React, { useContext, useState } from "react";
import { PluginConfig, SetPluginConfig } from "../data/types";

const PluginConfigContext = React.createContext(undefined);
const PluginSetConfigContext = React.createContext(undefined);

export const usePluginConfig = () => {
  return useContext(PluginConfigContext) as PluginConfig;
};

export const useSetPluginConfig = () => {
  return useContext(PluginSetConfigContext) as SetPluginConfig;
};

export const PluginConfigProvider = ({ children }) => {
  const [pluginConfig, setPluginConfig] = useState<PluginConfig>({
    hover: true,
    arrow: false,
    outline: false,
    dark: false,
  });

  return (
    <PluginConfigContext.Provider value={pluginConfig}>
      <PluginSetConfigContext.Provider value={setPluginConfig}>
        {children}
      </PluginSetConfigContext.Provider>
    </PluginConfigContext.Provider>
  );
};
