export type Languages = "ru" | "en";

export type ILanguageContext = {
  language: Languages;
  languageHandler: React.Dispatch<React.SetStateAction<Languages>>;
};
