import { FC } from "react";

import { StyledTextArea } from "./styled";

interface TextAreaProps {
  disabled: boolean;
  value: string;
  onChange: () => void;
  placeholder: string;
}

export const TextArea: FC<TextAreaProps> = (props) => {
  const { disabled = false, value, onChange, placeholder } = props;

  return (
    <StyledTextArea
      disabled={disabled}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
