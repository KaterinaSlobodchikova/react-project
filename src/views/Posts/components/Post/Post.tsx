import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { IconBookmark } from "../../../../assets";
import { IconButton, LikeButton, Title } from "../../../../common";

import { PostActions, PostContainer, PostPreview, PostText } from "./styled";
import { setCurrentPostAC, postsSelector } from "../../../../store";

export const Post: FC = () => {
  const dispatch = useDispatch();
  const { postId } = useParams<{ postId: string }>();
  const posts = useSelector(postsSelector);

  useEffect(() => {
    dispatch(setCurrentPostAC(Number(postId)));
  }, []);

  return (
    <PostContainer>
      <Title
        className="post-title-for-children"
        text={posts.currentPost?.title ?? ""}
        indent
      />
      <PostPreview src={posts.currentPost?.image} alt="post-preview" />
      <PostText>{posts.currentPost?.text}</PostText>

      <PostActions>
        <div className="button-container">
          <LikeButton isLiked={false} />
          <LikeButton isLiked />
        </div>

        <IconButton
          icon={IconBookmark}
          title="Add to favorites"
          onClick={() => {
            alert("added to fav");
          }}
        />
      </PostActions>
    </PostContainer>
  );
};
