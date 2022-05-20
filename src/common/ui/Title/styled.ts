import styled from "styled-components";

export const StyledTitle = styled.div`
  font-weight: 700;
  font-size: 56px;
  line-height: 143%;
  color: ${({ theme }) => theme.palette.system.secondary};

  &.indent {
    margin-top: 32px;
  }
`;
