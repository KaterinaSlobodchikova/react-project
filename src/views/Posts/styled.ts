import styled from "styled-components";

export const StyledPostsContainer = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 32px;

  padding-left: 50px;

  background-color: lightcyan;
`;

export const NoPosts = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #31a037;
  font-style: italic;
`;
