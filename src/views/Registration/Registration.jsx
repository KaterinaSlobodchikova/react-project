import { useCallback, useState } from "react";

import { Button } from "../../common/ui/Button";
import { Input } from "../../common/ui/Input";
import Link from "../../common/ui/Link";
import { RegistrationContainer } from "./styled";
import { Title } from "../../common";
import { useInputValue } from "../../utils/hooks/useInputValue";

export const Registration = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  // using custom hook useInputValue
  const [name, nameHandler] = useInputValue();
  const [email, emailHandler] = useInputValue();
  const [password, passwordHandler] = useInputValue();
  const [confirmPassword, confirmPasswordHandler] = useInputValue();

  // const nameValueHandler = useCallback((event) => {
  //  setName(event.target.value);
  // }, []);

  // const emailValueHandler = useCallback((event) => {
  //   setEmail(event.target.value);
  // }, []);

  // const passwordValueHandler = useCallback((event) => {
  //   setPassword(event.target.value);
  // }, []);

  // const confirmPasswordValueHandler = useCallback((event) => {
  //   setConfirmPassword(event.target.value);
  // }, []);

  const signUpHandler = () => {
    const signUpData = {
      name,
      email,
      password,
      confirmPassword,
    };
    console.log("Registration request was sent with this data:", signUpData);
  };

  return (
    <RegistrationContainer>
      <Title text="Sign Up" indent />
      <p>Name</p>

      <Input
        type="text"
        value={name}
        onChange={nameHandler}
        placeholder="Your name"
      />

      <p>Email</p>
      <Input
        type="text"
        value={email}
        onChange={emailHandler}
        placeholder="Your email"
      />
      <p>Password</p>
      <Input
        type="password"
        value={password}
        onChange={passwordHandler}
        placeholder="Your password"
      />
      <p>Confirm password</p>
      <Input
        type="password"
        value={confirmPassword}
        onChange={confirmPasswordHandler}
        placeholder="Confirm password"
      />

      <Button title="Sign Up" onClick={signUpHandler} />
      <p>
        Already have an account? <Link text="Sign in" />
      </p>
    </RegistrationContainer>
  );
};
