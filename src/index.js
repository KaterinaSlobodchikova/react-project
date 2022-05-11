import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import "normalize.css";

import { LanguageProvider } from "./context/LanguageContext";
import { theme, GlobalStyles } from "./styles";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </LanguageProvider>
  </React.StrictMode>
);
