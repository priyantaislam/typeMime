import React, { createContext, useState, useContext } from "react";

interface ThemeContextProps {
  currentTheme: string;
  setTheme: (theme: string) => void;
}

interface ThemeProviderProps {
  theme: string;
  children: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme,
  children,
}) => {
  const [currentTheme, setCurrentTheme] = useState<string>(theme);

  const setTheme = (theme: string) => {
    setCurrentTheme(theme);
    localStorage.setItem("theme", theme);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
