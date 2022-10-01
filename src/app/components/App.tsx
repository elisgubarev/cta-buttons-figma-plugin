import React from "react";
import ButtonItem from "./pluginUI/ButtonItem";
import Classic from "./buttons/Classic/Classic";
import "../styles/index.scss";

document.addEventListener("keydown", (e) => {
  if (e.key === "Control") {
    parent.postMessage({ pluginMessage: "dev-log" }, "*");
  }
});

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
