import { createContext, ReactElement, useState } from "react";
import { ILanguageContext, Languages } from "./types";

const LanguagesList: Languages[] = ["en", "ru"];

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
