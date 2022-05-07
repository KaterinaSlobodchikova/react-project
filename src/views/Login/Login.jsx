import { Button } from "../../common/ui/Button";
import { Input } from "../../common/ui/Input";
import { LoginContainer } from "./styled";

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

  return (
    <LoginContainer>
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
      <Input type="checkbox" checked={isRemember} onChange={rememberHandler} />
      <p>Remember me?</p>

      <Button title="Sign In" onClick={loginHandler} />
      <p>Don’t have an account? Sign Up</p>
    </LoginContainer>
  );
};
