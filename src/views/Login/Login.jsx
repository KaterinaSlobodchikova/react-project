import { useState, useEffect } from "react";

import { Button } from "../../common/ui/Button";
import { Input } from "../../common/ui/Input";
import { ForgotPass, HaveAccount, LoginContainer } from "./styled";
import { Link, Title } from "../../common";

export const Login = (props) => {
  const {
    email,
    password,
    isRemember,
    emailValueHandler,
    passwordValueHandler,
    rememberHandler,
    loginHandler,
  } = props;

  const [welcomeTextShown, setWelcomeTextShown] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setWelcomeTextShown(true);
    }, 2000);
  }, []);

  return (
    <LoginContainer>
      {welcomeTextShown && <span>Welcome to our blog!</span>}

      <Title text="Sign In" indent />

      <p>Email</p>
      <Input
        type="text"
        value={email}
        onChange={emailValueHandler}
        placeholder="Your email"
      />
      <p>Password</p>
      <Input
        type="password"
        value={password}
        onChange={passwordValueHandler}
        placeholder="Your password"
      />

      <ForgotPass>
        <Link text="Forgot password?" type="secondary" />
      </ForgotPass>

      <Input type="checkbox" checked={isRemember} onChange={rememberHandler} />
      <p>Remember me?</p>

      <Button title="Sign In" onClick={loginHandler} />
      <HaveAccount>
        Don’t have an account? <Link text="Sign Up" />
      </HaveAccount>
    </LoginContainer>
  );
};
