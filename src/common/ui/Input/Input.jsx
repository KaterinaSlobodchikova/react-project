import React from "react";
import { StyledInput } from "./styled";

export const Input = React.memo((props) => {
  const { type, disabled, value, onChange, placeholder } = props;

  console.log("input rendered");

  return (
    <StyledInput
      type={type}
      disabled={disabled}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
});
