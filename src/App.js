import React, { useState } from "react";
import "./App.scss";
import { Navbar } from "./components/index.js";
import { ContestBox } from "./container/index.js";


const App = () => {
  const [currentPlatform, setCurrentPlatform] = useState("All");

  return (
    <div className="app app__flex">
      <div className="app__container">
        <Navbar currentPlatform={currentPlatform} setCurrentPlatform={setCurrentPlatform}/>
        <ContestBox currentPlatform={currentPlatform} />
      </div>
    </div>
  );
};

export default App;
