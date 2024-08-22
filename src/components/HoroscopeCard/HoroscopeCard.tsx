import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LanguageContext } from "@components/LanguageContext/LanguageContext";
import { Error } from "@components/Error/Error";
import { IHoroscopeCard } from "./types";
import { translateSign } from "@utils/translateSign";
import { getSignDate } from "@utils/getSignDate";
import { fetchDataFromApi } from "@utils/fetchDataFromApi";
import { ZodiacName } from "src/customTypes/ZodiacName";
import { AppRoutes } from "@constants/routes";
import "./HoroscopeCard.scss";

export const HoroscopeCard = () => {
  const { id } = useParams();
  const naigate = useNavigate();
  const { language } = useContext(LanguageContext);
  const [data, setData] = useState<IHoroscopeCard>({
    horoscope: "",
    sign: id as ZodiacName,
  });
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const MIN_SWIPE_DISTANCE = 50;

  const onTouchEnd = () => {
    const distance = touchStart - touchEnd;
    const isRightSwipe = distance < -MIN_SWIPE_DISTANCE;

    if (!touchStart || !touchEnd) {
      return;
    }

    if (isRightSwipe) {
      naigate(AppRoutes.MAIN);
    }
  };

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
    <div
      className="horoscope-card"
      onTouchStart={(e) => {
        setTouchEnd(0);
        setTouchStart(e.targetTouches[0].clientX);
      }}
      onTouchMove={(e) => setTouchEnd(e.targetTouches[0].clientX)}
      onTouchEnd={onTouchEnd}
    >
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
