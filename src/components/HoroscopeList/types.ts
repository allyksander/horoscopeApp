import { ZodiacName } from "src/customTypes/ZodiacName";

export type HoroscopeApi = {
  horoscope: {
    [key in ZodiacName]: string;
  };
};
