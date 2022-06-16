import { FC, useContext } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

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
import { SearchInputClick } from "../SearchInputClick";
import { SearchInputDebounce } from "../SearchInputDebounce";

export const Header: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

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
      {/*<SearchInputClick />*/}
      <SearchInputDebounce />

      {/* <Button content="change language" onClick={changeLanguageHandler} /> */}

      {/*isLoading ? "" : <Username name={userInfo?.username} />*/}
      {isAuth ? (
        <>
          <Username name={userInfo?.username} />
          <Button
            content="Log out"
            onClick={logoutHandler}
            className="secondary small"
          />
        </>
      ) : (
        <Button
          content="Log in"
          onClick={loginHandler}
          className="secondary small"
        />
      )}
    </StyledHeaderContainer>
  );
};
