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
  const [disableControlBar, setDisableControlBar] = useState<boolean>(false);

  return (
    <div className={`${styles.AppContainer} ${currentTheme}`}>
      <div className="App">
        <NavBar />
        <ControlBar
          setTimerValue={setTimerValue}
          disableControlBar={disableControlBar}
        />
        <InputArea
          timerValue={timerValue}
          setDisableControlBar={setDisableControlBar}
        />
        <Footer />
      </div>
    </div>
  );
}

export default AppContainer;
