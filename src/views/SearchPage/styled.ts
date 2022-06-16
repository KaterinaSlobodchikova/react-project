import styled from "styled-components";

export const StyledPostsContainer = styled.div`
  width: 100%;

  padding-left: 50px;

  .post-container {
    align-items: center;
    gap: 32px;
  }
`;

export const Tabs = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 20px 0;
  padding: 20px 40px;
`;

export const TabsSwitcher = styled.button`
  min-width: 100px;
  &.active {
    border-bottom: 1px solid;
  }
`;

export const NoPosts = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #31a037;
  font-style: italic;
`;
