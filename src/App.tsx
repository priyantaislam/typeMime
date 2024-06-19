import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import InputArea from "./components/InputArea";
import ControlBar from "./components/ControlBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ControlBar />
      <InputArea />
    </div>
  );
}

export default App;
