import { FC, memo, ChangeEvent, ForwardedRef, forwardRef } from "react";

import { StyledInput } from "./styled";

// interface InputProps extends InputHTMLAttributes<HTMLInputElement>

type InputProps = {
  ref?: ForwardedRef<HTMLInputElement>;
  type: string;
  disabled?: boolean;
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  checked?: boolean;
};

const InputComponent: FC<InputProps> = forwardRef((props, ref) => {
  const { type, disabled, value, onChange, placeholder } = props;

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
});

export const Input = memo(InputComponent);
