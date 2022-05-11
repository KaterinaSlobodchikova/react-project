import { useCallback, useEffect, useState } from "react";
import { Login } from "./Login";
import { useInputValue } from "../../utils/hooks/useInputValue";

export const LoginContainer = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [isRemember, setIsRemember] = useState(false);

  const [email, emailHandler] = useInputValue();
  const [password, passwordHandler] = useInputValue();

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
    />
  );
};
