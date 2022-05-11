import { useContext } from "react";

import { LanguageContext } from "../../../context/LanguageContext";
import { Username } from "../Username/Username";
import { StyledHeaderContainer } from "./styled";
import { Button } from "../../ui/Button";

export const Header = (props) => {
  const { userInfo } = props;

  const { changeLang } = useContext(LanguageContext);

  // console.log("Context from header", contextValue);

  const changeLanguageHandler = () => {
    changeLang();
  };

  return (
    <StyledHeaderContainer>
      <Button title="change language" onClick={changeLanguageHandler} />
      <Username name={userInfo?.username} />
    </StyledHeaderContainer>
  );
};
