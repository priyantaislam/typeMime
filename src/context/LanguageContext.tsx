import React, { createContext, useState, useContext, useEffect } from "react";

interface LanguageContextProps {
  language: string;
  setLanguage: (language: string) => void;
}

interface LanguageProviderProps {
  children: React.ReactNode;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const getInitialLanguage = () =>
    localStorage.getItem("language") || "english";

  const [language, setLanguage] = useState<string>(getInitialLanguage);
  const [previousLanguage, setPreviousLanguage] =
    useState<string>(getInitialLanguage);

  useEffect(() => {
    if (language !== previousLanguage) {
      localStorage.setItem("language", language);
      setPreviousLanguage(language);
      window.location.reload();
    }
  }, [language, previousLanguage]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
