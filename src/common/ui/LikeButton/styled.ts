import styled from "styled-components";

export const StyledLikeButton = styled.button`
  padding: 16px 32px;

  width: 88px;
  height: 56px;

  background: lightgray;
  border-radius: 2px;

  &.active {
    background: #eedb7b;
  }
`;

export const LikeImage = styled.img``;

export const DislikeImage = styled.img`
  transform: rotate(180deg);
`;
