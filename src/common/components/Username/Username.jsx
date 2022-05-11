import React, { useContext } from "react";

import { LanguageContext } from "../../../context/LanguageContext";

import { StyledUsername } from "./styled";

export const Username = React.memo((props) => {
  const { name } = props;

  const { lang } = useContext(LanguageContext);

  const greetingsText = lang === "ru" ? "Привет" : "Hello";

  return (
    <StyledUsername>
      {greetingsText}, {name}!
    </StyledUsername>
  );
});
