import { useEffect, useRef, useState, FC } from "react";

import { Button, Input, Title } from "../../common";
import { ResetPassContainer, EmailReceived } from "./styled";
import { useInputValue } from "../../utils/hooks/useInputValue";

export const ResetPass: FC = () => {
  // const [email, setEmail] = useState("");
  const [emailSentShown, setEmailSentShown] = useState("");
  const [email, emailHandler] = useInputValue();

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  // use ref with html input
  // const inputRef = useRef(null);
  // console.log(inputRef.current);

  // const focusHandler = () => {
  //   inputRef.current.focus();
  // };

  // const emailValueHandler = (event) => {
  //   setEmail(event.target.value);
  // };

  const resetPassHandler = () => {
    setEmailSentShown(email);
    const resetPassData = {
      email,
    };
    console.log(
      "Reset password request was sent with this data:",
      resetPassData
    );
  };

  return (
    <ResetPassContainer>
      <Title text="Reset password" indent />

      {emailSentShown && (
        <EmailReceived>
          You will receive an email to{" "}
          <span className="email">{emailSentShown}</span> with a link to reset
          your password!
        </EmailReceived>
      )}

      <p>Email</p>
      {/* <input
        ref={inputRef}
        type="text"
        value={email}
        onChange={emailHandler}
        placeholder="Your email"
      />
      */}

      <Input
        ref={inputRef}
        type="text"
        value={email}
        onChange={emailHandler}
        placeholder="Your email"
      />

      {/* <Button title="Focus" onClick={focusHandler} /> */}

      <Button title="Reset" onClick={resetPassHandler} />
    </ResetPassContainer>
  );
};
