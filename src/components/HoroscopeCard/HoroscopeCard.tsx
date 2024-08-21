import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LanguageContext } from "@components/LanguageContext/LanguageContext";
import { Error } from "@components/Error/Error";
import { IHoroscopeCard } from "./type";
import { translateSign } from "@utils/translateSign";
import { getSignDate } from "@utils/getSignDate";
import { fetchDataFromApi } from "@utils/fetchDataFromApi";
import { ZodiacName } from "src/customTypes/ZodiacName";
import "./HoroscopeCard.scss";

export const HoroscopeCard = () => {
  const { id } = useParams();
  const { language } = useContext(LanguageContext);
  const [data, setData] = useState<IHoroscopeCard>({
    horoscope: "",
    sign: id as ZodiacName,
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDataFromApi({
        sign: id as ZodiacName,
        language: language,
      });
      const json = (await data.json()) as IHoroscopeCard;
      setData(json);
    };

    fetchData();
  }, [language, id]);

  return data.sign ? (
    <div className="horoscope-card">
      <div className="horoscope-card__data">
        <img
          src={`https://img.icons8.com/clouds/100/${data.sign}.png`}
          width={100}
          height={100}
          alt={id}
          className="horoscope-card__icon"
        />
        <h2 className="horoscope-card__name">
          {translateSign({ sign: data.sign, language: language })}
        </h2>
        <span className="horoscope-card__date">{getSignDate(data.sign)}</span>
      </div>
      <span className="horoscope-card__text">{data.horoscope}</span>
    </div>
  ) : (
    <Error />
  );
};
