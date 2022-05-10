import { useState } from "react";

import { Button } from "../../common/ui/Button";
import { Input } from "../../common/ui/Input";
import { ResetPassContainer, EmailReceived } from "./styled";
import { Title } from "../../common";

export const ResetPass = () => {
  const [email, setEmail] = useState("");
  const [emailSentShown, setEmailSentShown] = useState("");

  const emailValueHandler = (event) => {
    setEmail(event.target.value);
  };

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
      <Input
        type="text"
        value={email}
        onChange={emailValueHandler}
        placeholder="Your email"
      />

      <Button title="Reset" onClick={resetPassHandler} />
    </ResetPassContainer>
  );
};
