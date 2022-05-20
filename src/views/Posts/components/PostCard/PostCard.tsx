import { FC } from "react";

import { PostCardContainer, PostPreview, PostDate, PostTitle } from "./styled";
import { DefaultPreview } from "../../../../assets";
import type { PostModel } from "../../../../types/models";

interface PostCardProps {
  post: PostModel;
}

export const PostCard: FC<PostCardProps> = (props) => {
  const { post } = props;

  // const addToFavoritesHandler = () => {
  //   setLoading(!loading);
  // alert('added to favs');
  // };

  return (
    <PostCardContainer>
      <PostPreview src={post.image ? post.image : DefaultPreview} />
      <PostDate>{post.date}</PostDate>
      <PostTitle to={`/post/${post.id}`}>{post.title}</PostTitle>
    </PostCardContainer>
  );
};
