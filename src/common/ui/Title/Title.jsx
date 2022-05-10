import { StyledTitle } from "./styled";

export const Title = (props) => {
  const { text, indent } = props;

  return <StyledTitle className={indent ? "indent" : ""}>{text}</StyledTitle>;
};
