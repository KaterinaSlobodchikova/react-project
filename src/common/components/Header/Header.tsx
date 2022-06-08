import { FC, useContext } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Username } from "../Username";
import { StyledHeaderContainer } from "./styled";
import { Button } from "../../ui/Button";
import { Menu } from "../Menu";
import {
  useAppDispatch,
  userInfoSelector,
  AppState,
  userLoadingSelector,
  logoutTC,
  authInfoSelector,
} from "../../../store";

export const Header: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const userInfo = useSelector(userInfoSelector);
  const isAuth = useSelector(authInfoSelector);

  const isLoading = useSelector<AppState, boolean>(userLoadingSelector);

  //const { changeLang } = useLanguage();

  //const changeLanguageHandler = () => {
  //  changeLang();
  //};

  const logoutHandler = () => {
    dispatch(logoutTC());
  };

  const loginHandler = () => {
    navigate("/login");
  };

  return (
    <StyledHeaderContainer>
      <Menu />
      {/* <Button title="change language" onClick={changeLanguageHandler} /> */}

      {/*isLoading ? "" : <Username name={userInfo?.username} />*/}
      {isAuth ? (
        <>
          <Username name={userInfo?.username} />
          <Button
            title="Log out"
            onClick={logoutHandler}
            className="secondary small"
          />
        </>
      ) : (
        <Button
          title="Log in"
          onClick={loginHandler}
          className="secondary small"
        />
      )}
    </StyledHeaderContainer>
  );
};
