import { Languages } from "@customTypes/Languages";

export const getLanguagePreset = (language: Languages) =>
  language === "ru" ? "original" : "translated";
