import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  padding: 40px;

  // для потомков
  .post-title-for-children {
    font-weight: 700;
    font-size: 28px;
  }
  // для себя
  &.post-title {
    font-weight: 700;
    font-size: 28px;
  }

  .bottom-line {
    //position: absolute;
    width: 1120px;
    height: 1px;
    background: ${(props) => props.theme.palette.background.medium};
    margin-top: 72px;
  }
`;

export const PostText = styled.div`
  margin: 48px 0;
`;

export const PostPreview = styled.img`
  width: 992px;
  height: 518px;
`;

export const PostActions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  .button-container {
    display: flex;
    gap: 6px;
  }
`;

export const PostNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 72px;
`;

export const PostLink = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  cursor: pointer;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.palette.background.gray};

  &.next-link {
    align-items: flex-end;
  }
  .button-title {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: ${({ theme }) => theme.palette.system.secondary};
  }
`;
