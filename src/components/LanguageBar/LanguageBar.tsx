import { useContext, useState } from "react";
import { LanguageContext } from "@components/LanguageContext/LanguageContext";
import { LanguagesList } from "@constants/LanguagesList";
import "./LanguageBar.scss";

export const LanguageBar = () => {
  const { language, languageHandler } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleBar = () => setIsOpen(!isOpen);

  return (
    <div className={`language-bar${isOpen ? " language-bar--active" : ""}`}>
      <button className="language-bar__head" onClick={toggleBar}>
        <span className="language-bar__head-text">{language}</span>
        <svg
          viewBox="0 0 330 330"
          className="language-bar__arrow"
          fill="currentColor"
        >
          <path
            d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
          />
        </svg>
      </button>
      {isOpen && <div className="language-bar__overlay" onClick={toggleBar} />}
      <div className="language-bar__dropdown">
        <ul className="language-bar__list">
          {LanguagesList.map((item) => (
            <li
              key={item}
              onClick={() => {
                languageHandler(item);
                toggleBar();
              }}
              className={`language-bar__list-item${
                item === language ? "  language-bar__list-item--selected" : ""
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
