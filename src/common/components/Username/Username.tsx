import { FC, memo } from "react";

import { useLanguage } from "../../../context/LanguageContext";

import { StyledUsername } from "./styled";

type UsernameProps = {
  name: string;
};

export const Username: FC<UsernameProps> = memo((props) => {
  const { name } = props;

  const { lang } = useLanguage();

  const greetingsText = lang === "ru" ? "Привет" : "Hello";

  return (
    <StyledUsername>
      {greetingsText}, {name}!
    </StyledUsername>
  );
});
