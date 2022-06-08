import React, { FC } from "react";
import { Provider } from "react-redux";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { createBrowserHistory } from "history";

import { theme, GlobalStyles } from "./styles";
import { Routes } from "./router/Routes";
import { LanguageProvider } from "./context/LanguageContext";
import { store } from "./store";

export const history = createBrowserHistory({ window });

export const AppRoot: FC = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <HistoryRouter history={history}>
          <LanguageProvider>
            <ThemeProvider theme={theme}>
              <GlobalStyles />
              <Routes />
            </ThemeProvider>
          </LanguageProvider>
        </HistoryRouter>
      </Provider>
    </React.StrictMode>
  );
};
