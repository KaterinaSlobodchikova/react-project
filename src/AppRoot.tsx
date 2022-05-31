import React, { FC } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { theme, GlobalStyles } from "./styles";
import { Routes } from "./router/Routes";
import { LanguageProvider } from "./context/LanguageContext";
import { store } from "./store";

export const _store = {
  auth: true,
  posts: [
    {
      id: 1,
      image:
        "https://i.picsum.photos/id/1060/5598/3732.jpg?hmac=31kU0jp5ejnPTdEt-8tAXU5sE-buU-y1W1qk_BsiUC8",
      text: "Description one",
      date: "2021-10-06",
      lesson_num: 123,
      title:
        "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
      author: 7,
      isLiked: null,
    },
    {
      id: 2,
      image:
        "https://i.picsum.photos/id/244/4288/2848.jpg?hmac=R6j9PBP4aBk2vcEIoOPU4R_nuknizryn2Vq8GGtWTrM",
      text: "Description two",
      date: "2021-09-12",
      lesson_num: 123,
      title:
        "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
      author: 7,
      isLiked: null,
    },
    {
      id: 3,
      image:
        "https://i.picsum.photos/id/1039/6945/4635.jpg?hmac=tdgHDygif2JPCTFMM7KcuOAbwEU11aucKJ8eWcGD9_Q",
      text: "Description three",
      date: "2021-06-02",
      lesson_num: 123,
      title:
        "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
      author: 7,
      isLiked: null,
    },
  ],
  user: {
    id: "1",
    username: "Phoebe Buffay",
    email: "phoebe@gmail.com",
  },
};

export const AppRoot: FC = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <LanguageProvider>
            <ThemeProvider theme={theme}>
              <GlobalStyles />
              <Routes />
            </ThemeProvider>
          </LanguageProvider>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
};
