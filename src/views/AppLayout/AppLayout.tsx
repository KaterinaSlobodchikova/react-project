import { Outlet } from "react-router-dom";
import { FC } from "react";

import { AppLayoutContainer } from "./styled";
import { Footer, Header } from "../../common";

export const AppLayout: FC = () => {
  return (
    <AppLayoutContainer>
      <Header />
      <Outlet />
      <Footer />
    </AppLayoutContainer>
  );
};
