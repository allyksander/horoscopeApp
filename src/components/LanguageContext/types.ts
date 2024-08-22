import { Languages } from "@customTypes/Languages";

export type ILanguageContext = {
  language: Languages;
  languageHandler: React.Dispatch<React.SetStateAction<Languages>>;
};

export type TWAUser = {
  language_code: string;
};
