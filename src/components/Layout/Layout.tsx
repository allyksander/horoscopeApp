import { Header } from "@components/Header/Header";
import { Children } from "src/customTypes/Children";
import "./Layout.scss";

export const Layout = ({ children }: Children) => {
  return (
    <div className="layout">
      <Header />
      <div className="layout__content">
        <div className="container">{children}</div>
      </div>
    </div>
  );
};
