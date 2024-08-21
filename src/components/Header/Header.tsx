import { LanguageBar } from "@components/LanguageBar/LanguageBar";
import { NavLink } from "react-router-dom";
import { AppRoutes } from "@constants/routes";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <NavLink to={AppRoutes.MAIN} className="header__home">
            <img
              className="header__logo"
              width={32}
              height={32}
              src="https://www.svgrepo.com/show/296582/astrology-horoscope.svg"
            />
          </NavLink>
          <div className="header__name">HoroscopeApp</div>
          <LanguageBar />
        </div>
      </div>
    </header>
  );
};
