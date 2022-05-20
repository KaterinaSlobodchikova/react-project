import { Link } from "react-router-dom";
import { ChangeEvent, FC } from "react";

import { Button } from "../../common/ui/Button";
import { Input } from "../../common/ui/Input";
import { ForgotPass, HaveAccount, LoginContainer } from "./styled";
import { Title } from "../../common";

interface LoginProps {
  email: string;
  password: string;
  isRemember: boolean;
  emailValueHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  passwordValueHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  rememberHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  loginHandler: () => void;
  welcomeTextShown: boolean;
}

export const Login: FC<LoginProps> = (props) => {
  const {
    email,
    password,
    isRemember,
    emailValueHandler,
    passwordValueHandler,
    rememberHandler,
    loginHandler,
    welcomeTextShown,
  } = props;

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
        <Link to="/reset-password">Forgot password?</Link>
      </ForgotPass>
      <Input type="checkbox" checked={isRemember} onChange={rememberHandler} />
      <p>Remember me?</p>
      <Button title="Sign In" onClick={loginHandler} />
      <HaveAccount>
        Don’t have an account? <Link to="/registration">Sign Up</Link>
      </HaveAccount>
    </LoginContainer>
  );
};
