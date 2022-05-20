import styled from "styled-components";

export const StyledInput = styled.input`
  background: #ffffff;
  border-radius: 2px;
  border: none;

  height: 56px;
  width: 100%;
  max-width: 490px;
  padding-left: 20px;

  &:not(:last-of-type) {
    margin-bottom: 40px;
  }
`;
