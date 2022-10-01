import React from "react";
import ButtonItem from "./pluginUI/ButtonItem";
import Classic from "./buttons/Classic";
import "../styles/index.scss";

const App = () => {
  return (
    <div className="plugin">
      <ButtonItem>
        <Classic />
      </ButtonItem>
    </div>
  );
};

export default App;
