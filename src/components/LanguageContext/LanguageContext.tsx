import { createContext, ReactElement, useEffect, useState } from "react";
import { ILanguageContext } from "./types";
import { LanguagesList } from "@constants/LanguagesList";
import { Languages } from "@customTypes/Languages";
import WebApp from "@twa-dev/sdk";

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
    if (WebApp.initDataUnsafe.user) {
      setLanguage(WebApp.initDataUnsafe.user.language_code as Languages);
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
      user : {JSON.stringify(WebApp.initDataUnsafe.user)}
    </LanguageContext.Provider>
  );
};
