import { Languages } from "@components/LanguageContext/types";

export const getLanguagePreset = (language: Languages) =>
  language === "ru" ? "original" : "translated";
