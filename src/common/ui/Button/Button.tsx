import { FC, ReactElement } from "react";

import { StyledButton } from "./styled";

type ButtonProps = {
  content: ReactElement | string | number;
  disabled?: boolean;
  onClick: () => void;
  className?: string;
  secondary?: boolean;
};

export const Button: FC<ButtonProps> = (props) => {
  const {
    content,
    onClick,
    disabled = false,
    secondary = false,
    className,
  } = props;

  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      className={secondary ? "secondary ${className}" : className}
    >
      {content}
    </StyledButton>
  );
};
