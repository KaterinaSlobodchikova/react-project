import { FC } from "react";

import {
  PostCardContainer,
  PostPreview,
  PostDate,
  PostTitle,
  PostActions,
  LikesContainer,
} from "./styled";
import { DefaultPreview, IconBookmark } from "../../../../assets";
import type { PostModel } from "../../../../types/models";
import { IconButton, LikeButton } from "../../../../common";

interface PostCardProps {
  post: PostModel;
  favorite?: boolean;
  liked: boolean;
  onFavsToggle: (id: number) => void;
  onLikeToggle: (id: number, value: boolean) => void;
}

export const PostCard: FC<PostCardProps> = (props) => {
  const {
    post,
    favorite = false,
    liked = false,
    onFavsToggle,
    onLikeToggle,
  } = props;

  return (
    <PostCardContainer>
      <PostPreview src={post.image ? post.image : DefaultPreview} />
      <PostDate>{post.date}</PostDate>
      <PostTitle to={`/posts/${post.id}`}>{post.title}</PostTitle>

      <PostActions>
        <LikesContainer>
          <LikeButton
            onToggleLike={(value) => onLikeToggle(post.id, value)}
            liked={liked}
          />
          <LikeButton
            onToggleLike={(value) => onLikeToggle(post.id, value)}
            liked={liked}
            type="dislike"
          />
        </LikesContainer>
        <IconButton
          icon={IconBookmark}
          title="Favorite"
          onClick={() => onFavsToggle(post.id)}
        />
      </PostActions>
    </PostCardContainer>
  );
};
