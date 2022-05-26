import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { IconBookmark } from "../../../../assets";
import { IconButton, LikeButton, Title } from "../../../../common";

import { PostActions, PostContainer, PostPreview, PostText } from "./styled";
import { setCurrentPostAC, currentPostSelector } from "../../../../store";
import { PostModel } from "../../../../types/models";

export const Post: FC = () => {
  const dispatch = useDispatch();
  const { postId } = useParams<{ postId: string }>();
  const currentPost = useSelector(currentPostSelector);

  useEffect(() => {
    dispatch(setCurrentPostAC(Number(postId)));
  }, []);

  return (
    <PostContainer>
      <Title
        className="post-title-for-children"
        text={currentPost?.title ?? ""}
        indent
      />
      <PostPreview src={currentPost?.image} alt="post-preview" />
      <PostText>{currentPost?.text}</PostText>

      <PostActions>
        <div className="button-container">
          <LikeButton isLiked={false} />
          <LikeButton isLiked />
        </div>

        <IconButton
          icon={IconBookmark}
          title="Add to favorites"
          onClick={() => {
            alert("added to favs");
          }}
        />
      </PostActions>
    </PostContainer>
  );
};
