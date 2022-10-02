import React, { useContext, useState } from "react";

const PluginConfigContext = React.createContext(undefined);
const PluginSetConfigContext = React.createContext(undefined);

export const usePluginConfig = () => {
  return useContext(PluginConfigContext);
};

export const useSetPluginConfig = () => {
  return useContext(PluginSetConfigContext);
};

export const PluginConfigProvider = ({ children }) => {
  const [pluginConfig, setPluginConfig] = useState({
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
