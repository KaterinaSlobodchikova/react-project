import { FC } from "react";

import { StyledButton } from "./styled";

type ButtonProps = {
  title: string;
  disabled?: boolean;
  onClick: () => void;
  className?: string;
  secondary?: boolean;
};

export const Button: FC<ButtonProps> = (props) => {
  const {
    title,
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
      {title}
    </StyledButton>
  );
};
