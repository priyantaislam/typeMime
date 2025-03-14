import React from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { SoundProvider } from "./context/SoundContext";
import { LanguageProvider } from "./context/LanguageContext";
import AppContainer from "./AppContainer";

function App() {
  const defaultValue = "root";
  const storedValue = localStorage.getItem("theme") ?? defaultValue;
  return (
    <LanguageProvider>
      <SoundProvider>
        <ThemeProvider theme={storedValue}>
          <AppContainer />
        </ThemeProvider>
      </SoundProvider>
    </LanguageProvider>
  );
}

export default App;
