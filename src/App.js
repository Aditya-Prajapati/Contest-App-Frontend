import React from "react";
import "./App.scss";
import { Navbar } from "./components/index.js";
import { ContestBox } from "./container/index.js";


const App = () => {
  return (
    <div className="app app__flex">
      <div className="app__container">
        <Navbar />
        <ContestBox />
      </div>
    </div>
  );
};

export default App;
