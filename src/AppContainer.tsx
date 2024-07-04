import React from "react";
import NavBar from "./ui-control/NavBar";
import ControlBar from "./ui-control/ControlBar";
import InputArea from "./typing-interface/InputArea";
import Footer from "./components/Footer";
import { useTheme } from "./context/ThemeContext";
import styles from "./App.module.css"; // Assuming you have a CSS file for styling

function AppContainer() {
  const { currentTheme } = useTheme();
  return (
    <div className={`${styles.AppContainer} ${currentTheme}`}>
      <div className="App">
        <NavBar />
        <ControlBar />
        <InputArea />
        <Footer />
      </div>
    </div>
  );
}

export default AppContainer;
