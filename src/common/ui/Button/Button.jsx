import { StyledButton } from "./styled";

export const Button = (props) => {
  const { title, onClick, disabled } = props;

  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {title}
    </StyledButton>
  );
};
