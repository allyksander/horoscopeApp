import { useContext, useEffect, useState } from "react";
import { HoroscopeApi } from "./types";
import { ZodiacName } from "src/customTypes/ZodiacName";
import { LanguageContext } from "@components/LanguageContext/LanguageContext";
import { getSignDate } from "@utils/getSignDate";
import { translateSign } from "@utils/translateSign";
import { fetchDataFromApi } from "@utils/fetchDataFromApi";
import { NavLink } from "react-router-dom";
import { AppRoutes } from "@constants/routes";
import "./HoroscopeList.scss";

export const HoroscopeList = () => {
  const [horoscopeList, setHoroscopeList] = useState<
    Pick<HoroscopeApi, "horoscope"> | object
  >({});
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDataFromApi({ language: language });
      const json = (await data.json()) as HoroscopeApi;

      setHoroscopeList(json.horoscope);
    };

    fetchData();
  }, [language]);

  return !horoscopeList ? (
    <h1>No data...</h1>
  ) : (
    <ul className="horoscope-list">
      {Object.keys(horoscopeList).map((item) => (
        <li className="horoscope-list__item" key={item}>
          <NavLink
            to={`${AppRoutes.HOROSCOPE}/${item}`}
            className="horoscope-list__link"
          >
            <img
              src={`https://img.icons8.com/clouds/100/${item}.png`}
              width={100}
              height={100}
              alt={item}
              className="horoscope-list__icon"
            />
            <h2 className="horoscope-list__name">
              {translateSign({ sign: item as ZodiacName, language: language })}
            </h2>
            <span className="horoscope-list__date">
              {getSignDate(item as ZodiacName)}
            </span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
