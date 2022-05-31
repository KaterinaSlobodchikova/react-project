import { Outlet } from "react-router-dom";
import { FC } from "react";
import { useSelector } from "react-redux";

import { AppLayoutContainer } from "./styled";
import { Footer, Header, Spinner } from "../../common";
import { AppState, postsLoadingSelector } from "../../store";

export const AppLayout: FC = () => {
  const isLoading = useSelector<AppState, boolean>(postsLoadingSelector);

  return (
    <AppLayoutContainer>
      <Header />
      <Outlet />
      <Footer />
      {isLoading && <Spinner />}
    </AppLayoutContainer>
  );
};
