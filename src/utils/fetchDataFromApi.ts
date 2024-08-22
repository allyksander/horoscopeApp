import { Languages } from "@customTypes/Languages";
import { getLanguagePreset } from "./getLanguagePreset";
import { ZodiacName } from "src/customTypes/ZodiacName";

type FetchDataParams = {
  sign?: ZodiacName;
  language: Languages;
};

export const fetchDataFromApi = ({ sign, language }: FetchDataParams) =>
  fetch("https://poker247tech.ru/get_horoscope/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sign: sign || "",
      language: getLanguagePreset(language),
      period: "today",
    }),
  });
