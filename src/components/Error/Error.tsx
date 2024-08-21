import { AppRoutes } from "@constants/routes";
import { NavLink } from "react-router-dom";
import "./Error.scss";

export const Error = () => {
  return (
    <div className="error">
      <h1 className="error__title">Page not found...</h1>
      <NavLink to={AppRoutes.MAIN} className="error__link">
        Go to main page
      </NavLink>
    </div>
  );
};
