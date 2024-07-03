import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./ui-control/NavBar";
import InputArea from "./typing-interface/InputArea";
import ControlBar from "./ui-control/ControlBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ControlBar />
      <InputArea />
      <Footer />
    </div>
  );
}

export default App;
