import { useCallback, useState } from "react";

import { Button } from "../../common/ui/Button";
import { Input } from "../../common/ui/Input";
import Link from "../../common/ui/Link";
import { RegistrationContainer } from "./styled";
import { Title } from "../../common";

export const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const nameValueHandler = useCallback((event) => {
    setName(event.target.value);
  }, []);

  const emailValueHandler = useCallback((event) => {
    setEmail(event.target.value);
  }, []);

  const passwordValueHandler = useCallback((event) => {
    setPassword(event.target.value);
  }, []);

  const confirmPasswordValueHandler = useCallback((event) => {
    setConfirmPassword(event.target.value);
  }, []);

  const signUpHandler = () => {
    const signUpData = {
      name,
      email,
      password,
      confirmPassword,
    };
    console.log("Registration request was sent with this data:", signUpData);
  };

  console.log("registration rendered");

  return (
    <RegistrationContainer>
      <Title text="Sign Up" indent />
      <p>Name</p>
      <Input
        type="text"
        value={name}
        onChange={nameValueHandler}
        placeholder="Your name"
      />
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
      <p>Confirm password</p>
      <Input
        type="password"
        value={confirmPassword}
        onChange={confirmPasswordValueHandler}
        placeholder="Confirm password"
      />

      <Button title="Sign Up" onClick={signUpHandler} />
      <p>
        Already have an account? <Link text="Sign in" />
      </p>
    </RegistrationContainer>
  );
};
