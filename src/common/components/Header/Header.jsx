import { Username } from "../Username/Username";
import { StyledHeaderContainer } from "./styled";

export const Header = (props) => {
  const { userInfo } = props;

  return (
    <StyledHeaderContainer>
      <Username name={userInfo?.username} />
    </StyledHeaderContainer>
  );
};
