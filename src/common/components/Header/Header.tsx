import { FC, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useLanguage } from "../../../context/LanguageContext";
import { Username } from "../Username";
import { StyledHeaderContainer } from "./styled";
import { Button } from "../../ui/Button";
import { Menu } from "../Menu";
import { logoutAC, userInfoSelector } from "../../../store";

export const Header: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector(userInfoSelector);

  //const { changeLang } = useLanguage();

  //const changeLanguageHandler = () => {
  //  changeLang();
  //};

  const logoutHandler = () => {
    dispatch(logoutAC());
    navigate("/");
  };

  return (
    <StyledHeaderContainer>
      <Menu />
      {/* <Button title="change language" onClick={changeLanguageHandler} /> */}

      <Username name={userInfo?.username} />
      <Button
        title="Log out"
        onClick={logoutHandler}
        className="secondary small"
      />
    </StyledHeaderContainer>
  );
};
