import { createContext, ReactElement, useEffect, useState } from "react";
import { ILanguageContext, Languages } from "./types";
import { LanguagesList } from "@constants/LanguagesList";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Telegram: any;
  }
}
const languageContextInit = {
  language: LanguagesList[0],
  languageHandler: () => {},
};

export const LanguageContext =
  createContext<ILanguageContext>(languageContextInit);

export const LanguageContextProvider = ({
  children,
}: {
  children?: ReactElement | ReactElement[];
}) => {
  const [language, setLanguage] = useState<Languages>(LanguagesList[0]);

  useEffect(() => {
    if (window.Telegram.WebApp.initDataUnsafe.user) {
      setLanguage(window.Telegram.WebApp.initDataUnsafe.user.language_code);
    }
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        language: language,
        languageHandler: setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
