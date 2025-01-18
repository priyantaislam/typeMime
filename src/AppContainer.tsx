import React from "react";
import NavBar from "./ui-control/NavBar";
import ControlBar from "./ui-control/ControlBar";
import InputArea from "./typing-interface/InputArea";
import Footer from "./components/Footer";
import { useTheme } from "./context/ThemeContext";
import styles from "./App.module.css";
import { useState } from "react";

function AppContainer() {
  const { currentTheme } = useTheme();
  const [timerValue, setTimerValue] = useState<number>(15);
  const [wordLimit, setWordLimit] = useState<number>(50);
  const [isTimerMode, setIsTimerMode] = useState<boolean>(true);

  return (
    <div className={`${styles.AppContainer} ${currentTheme}`}>
      <div className="App">
        <NavBar />
        <ControlBar
          setTimerValue={setTimerValue}
          setIsTimerMode={setIsTimerMode}
          setWordLimit={setWordLimit}
          isTimerMode={isTimerMode}
        />
        <InputArea
          timerValue={timerValue}
          isTimerMode={isTimerMode}
          wordLimit={wordLimit}
        />
        <Footer />
      </div>
    </div>
  );
}

export default AppContainer;
