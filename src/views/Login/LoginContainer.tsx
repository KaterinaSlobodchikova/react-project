import { FC, useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Login } from "./Login";
import { useInputValue } from "../../utils/hooks/useInputValue";

export const LoginContainer: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [isRemember, setIsRemember] = useState(false);

  const [email, emailHandler] = useInputValue();
  const [password, passwordHandler] = useInputValue();
  const [welcomeTextShown, setWelcomeTextShown] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setWelcomeTextShown(true);
    }, 2000);
  }, []);

  // const emailValueHandler = useCallback((event) => {
  //   setEmail(event.target.value);
  // }, []);

  // const passwordValueHandler = useCallback((event) => {
  //   setPassword(event.target.value);
  // }, []);

  const loginHandler = () => {
    const loginData = {
      email,
      password,
      rememberMe: isRemember,
    };
    console.log("We logged in with this data:", loginData);
    navigate("/", { replace: true, state: { from: location } });
  };

  const rememberHandler = useCallback(() => {
    setIsRemember(!isRemember);
  }, []);

  return (
    <Login
      email={email}
      password={password}
      isRemember={isRemember}
      emailValueHandler={emailHandler}
      passwordValueHandler={passwordHandler}
      rememberHandler={rememberHandler}
      loginHandler={loginHandler}
      welcomeTextShown={welcomeTextShown}
    />
  );
};