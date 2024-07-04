import React from "react";
import logo from "./logo.svg";
import NavBar from "./ui-control/NavBar";
import InputArea from "./typing-interface/InputArea";
import ControlBar from "./ui-control/ControlBar";
import Footer from "./components/Footer";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { Theme } from "./components/types";
import { useState } from "react";
import AppContainer from "./AppContainer";

function App() {
  const defaultValue = "root";
  const storedValue = localStorage.getItem("theme") ?? defaultValue;
  return (
    <ThemeProvider theme={storedValue}>
      <AppContainer />
    </ThemeProvider>
  );
}

export default App;
