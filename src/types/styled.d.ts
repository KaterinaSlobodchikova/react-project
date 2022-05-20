import "styled-components";

import { ITheme, ThemeEnum } from "../styles/types";

declare module "styled-components" {
  export interface DefaultTheme extends Required<ITheme> {
    type: ThemeEnum;
  }
}
