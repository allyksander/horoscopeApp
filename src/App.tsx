import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppRoutes } from "@constants/routes";
import { Main } from "@pages/Main/Main";
import { NotFound } from "@pages/NotFound/NotFound";
import { Horoscope } from "@pages/Horoscope/Horoscope";
import "./index.scss";

const router = createBrowserRouter([
  {
    path: AppRoutes.MAIN,
    element: <Main />,
    errorElement: <NotFound />,
  },
  {
    path: `${AppRoutes.HOROSCOPE}/:id`,
    element: <Horoscope />,
    errorElement: <NotFound />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
