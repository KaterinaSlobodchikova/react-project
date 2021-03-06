import { Link } from "react-router-dom";
import styled from "styled-components";

export const PostCardContainer = styled.div`
  width: 352px;

  margin-bottom: 40px;

  .add-button {
    margin-left: 10px;
  }
`;

export const PostPreview = styled.img`
  width: 352px;
  height: 246px;
  padding-top: 10px;

  margin-bottom: 24px;
`;

export const PostDate = styled.div`
  margin-bottom: 8px;

  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #8d8e97;
`;

export const PostTitle = styled(Link)`
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #313037;
`;

export const DefaultPreview = styled.img`
  width: 352px;
  height: 246px;
  padding-top: 10px;

  margin-bottom: 24px;
`;

export const PostActions = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
`;

export const LikesContainer = styled.div`
  display: flex;
`;
