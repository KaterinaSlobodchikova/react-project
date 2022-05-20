import type { DefaultTheme } from "styled-components";

import { ThemeEnum } from "./types";
import type { ITheme } from "./types";

export const baseTheme: ITheme = {
  breakpoints: {},
  palette: {
    system: {
      primary: "#2231AA",
      primaryHover: "#5360CD",
      secondary: "#313037",
    },
    background: {
      gray: "#8D8E97",
      medium: "#DADADA",
      light: "#E8E8E8",
      extraLight: "#F3F3F3",
    },
  },
  variables: {},
  mixins: {
    flex: () => "display: flex",
  },
};

export const lightTheme: DefaultTheme = {
  ...baseTheme,
  type: ThemeEnum.light,
};

export const darkTheme: DefaultTheme = {
  ...baseTheme,
  type: ThemeEnum.dark,
};
