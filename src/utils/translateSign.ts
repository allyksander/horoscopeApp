import { Languages } from "@customTypes/Languages";
import { ZodiacName } from "@customTypes/ZodiacName";

export const translateSign = ({
  sign,
  language,
}: {
  sign: ZodiacName;
  language: Languages;
}) => {
  const data = {
    ru: {
      capricorn: "Козерог",
      aquarius: "Водолей",
      pisces: "Рыбы",
      aries: "Овен",
      taurus: "Телец",
      gemini: "Близнецы",
      cancer: "Рак",
      leo: "Лев",
      virgo: "Дева",
      libra: "Весы",
      scorpio: "Скорпион",
      sagittarius: "Стрелец",
    },
  };

  return language === "en" ? sign : data[language][sign];
};
