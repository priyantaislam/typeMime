import React, { createContext, useState, useContext, useEffect } from "react";

interface SoundContextProps {
  sound: string;
  setSound: (sound: string) => void;
}

interface SoundProviderProps {
  children: React.ReactNode;
}

const SoundContext = createContext<SoundContextProps | undefined>(undefined);

export const SoundProvider: React.FC<SoundProviderProps> = ({ children }) => {
  const getInitialSound = () => localStorage.getItem("sound") || "click";

  const [sound, setSound] = useState<string>(getInitialSound);

  useEffect(() => {
    localStorage.setItem("sound", sound);
  }, [sound]);

  return (
    <SoundContext.Provider value={{ sound, setSound }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = (): SoundContextProps => {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error("useSound must be used within a SoundProvider");
  }
  return context;
};
