import { useRef, useState, FC } from "react";

import { Button, Input, Title } from "../../common";
import { NewPassContainer } from "./styled";
import { useInputValue } from "../../utils/hooks/useInputValue";

export const NewPass: FC = () => {
  const [password, passwordHandler] = useInputValue();
  const [confirmPassword, confirmPasswordHandler] = useInputValue();

  const inputRef = useRef<HTMLInputElement>(null);

  const setPassHandler = () => {
    const setPassData = {
      password,
      confirmPassword,
    };
    console.log(
      "Set new password request was sent with this data:",
      setPassData
    );
  };

  return (
    <NewPassContainer>
      <Title text="New password" indent />

      <p>Password</p>
      <Input
        ref={inputRef}
        type="text"
        value={password}
        onChange={passwordHandler}
        placeholder="Your password"
      />

      <p>Confirm password</p>
      <Input
        ref={inputRef}
        type="text"
        value={confirmPassword}
        onChange={confirmPasswordHandler}
        placeholder="Confirm your password"
      />

      <Button content="Set password" onClick={setPassHandler} />
    </NewPassContainer>
  );
};
