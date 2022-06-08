import { useCallback, useState, FC } from "react";
import { Link } from "react-router-dom";

import { Button, Input, Title } from "../../common";
import { HaveAccount, RegistrationContainer } from "./styled";
import { useInputValue } from "../../utils/hooks/useInputValue";
import { registrationTC, useAppDispatch } from "../../store";
import { RegistrationDTO } from "../../services/api/auth";

export const Registration: FC = () => {
  const dispatch = useAppDispatch();
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
      username: name,
      email,
      password,
    } as RegistrationDTO;
    dispatch(registrationTC(signUpData));
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
      <HaveAccount>
        Already have an account? <Link to="/login">Sign in</Link>
      </HaveAccount>
    </RegistrationContainer>
  );
};
