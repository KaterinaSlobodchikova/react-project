import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  height: 56px;

  padding: 0 32px;

  border-radius: 2px;
  background-color: lightgray;

  font-weight: 600;
  font-size: 18px;
  line-height: 133%;

  color: ${({ theme }) => theme.palette.system.secondary};
`;

export const Icon = styled.img`
  margin-right: 14px;
`;
