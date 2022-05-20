import type { TODO_ANY } from "../types/any";

export const enum ThemeEnum {
  light = "light",
  dark = "dark",
}

export interface ITheme {
  breakpoints: TODO_ANY;

  palette: {
    system: {
      primary: string;
      primaryHover: string;
      secondary: string;
    };
    background: {
      gray: string;
      medium: string;
      light: string;
      extraLight: string;
    };
  };

  variables: TODO_ANY;

  mixins: {
    flex: () => string;
  };
}
