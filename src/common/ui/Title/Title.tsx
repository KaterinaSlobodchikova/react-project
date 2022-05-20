import { FC } from "react";

import { StyledTitle } from "./styled";

interface TitleProps {
  text: string;
  indent?: boolean;
  className?: string;
}

export const Title: FC<TitleProps> = (props) => {
  const { text, indent = false, className } = props;

  return (
    <StyledTitle className={indent ? "indent ${className}" : className}>
      {text}
    </StyledTitle>
  );
};
