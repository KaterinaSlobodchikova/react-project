import React from "react";

import { StyledInput } from "./styled";

export const Input = React.memo(
  React.forwardRef((props, ref) => {
    const { type, disabled, value, onChange, placeholder } = props;

    console.log("input rendered");

    return (
      <StyledInput
        ref={ref}
        type={type}
        disabled={disabled}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    );
  })
);
