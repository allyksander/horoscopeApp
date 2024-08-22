import { ZodiacName } from "@customTypes/ZodiacName";

export const getSignDate = (sign: ZodiacName) => {
  const zodiacDates = {
    capricorn: "22.12 - 19.01",
    aquarius: "20.01 - 18.02",
    pisces: "19.02 - 20.03",
    aries: "21.03 - 19.04",
    taurus: "20.04 - 20.05",
    gemini: "21.05 - 20.06",
    cancer: "21.06 - 22.07",
    leo: "23.07 - 22.08",
    virgo: "23.08 - 22.09",
    libra: "23.09 - 22.10",
    scorpio: "23.10 - 21.11",
    sagittarius: "22.11 - 21.12",
  };

  return zodiacDates[sign];
};
