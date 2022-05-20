import styled from "styled-components";

export const StyledButton = styled.button`
  color: ${({ theme }) => theme.palette.system.primary};
  font-size: 20px;
  background: #2231aa;
  border-radius: 2px;
  border: none;
  color: #fff;

  height: 56px;
  width: 490px;
  margin: 5px;
`;
