import { FC } from "react";

import { PostCardContainer, PostPreview, PostDate, PostTitle } from "./styled";
import { DefaultPreview } from "../../../../assets";
import type { PostModel } from "../../../../types/models";

interface PostCardProps {
  post: PostModel;
  onFavsToggle: (id: number) => void;
}

export const PostCard: FC<PostCardProps> = (props) => {
  const { post, onFavsToggle } = props;

  return (
    <PostCardContainer>
      <PostPreview src={post.image ? post.image : DefaultPreview} />
      <PostDate>{post.date}</PostDate>
      <PostTitle to={`/posts/${post.id}`}>{post.title}</PostTitle>

      <button onClick={() => onFavsToggle(post.id)} className="add-button">
        add to fav
      </button>
    </PostCardContainer>
  );
};
