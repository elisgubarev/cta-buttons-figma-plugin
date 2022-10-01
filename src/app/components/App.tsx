import React from "react";
import ButtonItem from "./pluginUI/ButtonItem";
import Classic from "./buttons/Classic/Classic";
import Sharp from "./buttons/Sharp/Sharp";
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
      <ButtonItem>
        <Sharp />
      </ButtonItem>
    </div>
  );
};

export default App;
