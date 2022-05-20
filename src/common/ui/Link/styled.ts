import styled, { css } from "styled-components";

const baseLinkStyles = css`
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  text-decoration: none;
`;

export const PrimaryLink = styled.a`
  ${baseLinkStyles};

  color: ${({ theme }) => theme.palette.system.primary};
`;

export const SecondaryLink = styled.a`
  ${baseLinkStyles};
  color: ${({ theme }) => theme.palette.system.secondary};
  &:hover {
    color: ${({ theme }) => theme.palette.system.primary};
  }
`;
